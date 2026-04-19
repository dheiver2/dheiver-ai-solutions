import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Cliente server-only. Usa a service role key — NUNCA importar em código do cliente.
// Retorna null se as env vars não estiverem configuradas, para que os handlers
// possam fazer fallback (ex.: is-paid-email continua consultando Stripe direto).
let cached: SupabaseClient | null | undefined;

export const getSupabaseAdmin = (): SupabaseClient | null => {
  if (cached !== undefined) return cached;

  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    cached = null;
    return null;
  }

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
};
