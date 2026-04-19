import { supabase } from './supabaseClient';

const PROGRESS_PREFIX = 'mentorando_progress_';

export type ProgressMap = Record<string, boolean>;

const canUseStorage = () => typeof window !== 'undefined';

const buildKey = (userId: string) => `${PROGRESS_PREFIX}${userId}`;

const readCache = (userId: string): ProgressMap => {
  if (!canUseStorage() || !userId) return {};
  try {
    const stored = localStorage.getItem(buildKey(userId));
    return stored ? (JSON.parse(stored) as ProgressMap) : {};
  } catch (error) {
    console.error('Erro ao ler cache de progresso:', error);
    return {};
  }
};

const writeCache = (userId: string, progress: ProgressMap): void => {
  if (!canUseStorage() || !userId) return;
  try {
    localStorage.setItem(buildKey(userId), JSON.stringify(progress));
  } catch (error) {
    console.error('Erro ao gravar cache de progresso:', error);
  }
};

// Snapshot síncrono a partir do cache local. Use para a primeira renderização.
export const getProgressCached = (userId: string): ProgressMap => readCache(userId);

// Busca o estado autoritativo no Supabase e atualiza o cache local.
export const fetchProgress = async (userId: string): Promise<ProgressMap> => {
  if (!userId) return {};

  const { data, error } = await supabase
    .from('mentorando_progress')
    .select('item_key, done')
    .eq('user_id', userId);

  if (error) {
    console.error('Erro ao buscar progresso no Supabase:', error);
    return readCache(userId);
  }

  const map: ProgressMap = {};
  for (const row of data ?? []) {
    if (row.done) map[row.item_key] = true;
  }
  writeCache(userId, map);
  return map;
};

// Alterna um item: atualiza otimisticamente o cache, persiste no Supabase e
// reverte em caso de erro. Retorna o estado pós-toggle.
export const toggleProgress = async (userId: string, itemKey: string): Promise<ProgressMap> => {
  if (!userId || !itemKey) return readCache(userId);

  const current = readCache(userId);
  const nextDone = !current[itemKey];
  const optimistic: ProgressMap = { ...current, [itemKey]: nextDone };
  writeCache(userId, optimistic);

  const { error } = await supabase
    .from('mentorando_progress')
    .upsert(
      { user_id: userId, item_key: itemKey, done: nextDone, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,item_key' }
    );

  if (error) {
    console.error('Erro ao salvar progresso no Supabase:', error);
    writeCache(userId, current);
    return current;
  }

  return optimistic;
};

export const getProgressRatio = (progress: ProgressMap, total: number): number => {
  if (total <= 0) return 0;
  const done = Object.values(progress).filter(Boolean).length;
  return Math.min(1, done / total);
};
