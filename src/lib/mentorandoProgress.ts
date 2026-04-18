const PROGRESS_PREFIX = 'mentorando_progress_';

export type ProgressMap = Record<string, boolean>;

const canUseStorage = () => typeof window !== 'undefined';

const buildKey = (userId: string) => `${PROGRESS_PREFIX}${userId}`;

export const getProgress = (userId: string): ProgressMap => {
  if (!canUseStorage() || !userId) return {};

  try {
    const stored = localStorage.getItem(buildKey(userId));
    return stored ? (JSON.parse(stored) as ProgressMap) : {};
  } catch (error) {
    console.error('Erro ao ler progresso do mentorando:', error);
    return {};
  }
};

export const setProgress = (userId: string, progress: ProgressMap): void => {
  if (!canUseStorage() || !userId) return;
  localStorage.setItem(buildKey(userId), JSON.stringify(progress));
};

export const toggleProgress = (userId: string, itemKey: string): ProgressMap => {
  const current = getProgress(userId);
  const updated: ProgressMap = { ...current, [itemKey]: !current[itemKey] };
  setProgress(userId, updated);
  return updated;
};

export const getProgressRatio = (progress: ProgressMap, total: number): number => {
  if (total <= 0) return 0;
  const done = Object.values(progress).filter(Boolean).length;
  return Math.min(1, done / total);
};
