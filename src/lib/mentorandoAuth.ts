import type { AuthError, User } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';

export interface MentorandoUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface RegisterResult {
  needsEmailConfirmation: boolean;
  user: MentorandoUser | null;
}

const getSignupRedirectUrl = (): string | undefined => {
  if (typeof window === 'undefined') return undefined;
  return `${window.location.origin}/#/area-mentorando`;
};

const toMentorandoUser = (user: User | null | undefined, fallbackEmail?: string): MentorandoUser | null => {
  if (!user) return null;
  const email = user.email ?? fallbackEmail ?? '';
  if (!email) return null;
  const name =
    (user.user_metadata && (user.user_metadata.name as string | undefined)) ||
    email.split('@')[0];
  return {
    id: user.id,
    email,
    name,
    createdAt: user.created_at,
  };
};

const translateAuthError = (error: AuthError | { message?: string }): Error => {
  const msg = error.message ?? '';
  if (/mentorando_email_not_paid|email_not_paid/i.test(msg)) {
    return new Error(
      'Este email ainda não foi liberado. Use o mesmo email do pagamento — se acabou de comprar, aguarde alguns segundos e tente de novo.'
    );
  }
  if (/already registered|already.*exists/i.test(msg)) {
    return new Error('Já existe um cadastro com este email. Tente fazer login.');
  }
  if (/email not confirmed/i.test(msg)) {
    return new Error('Confirme seu email antes de entrar. Abra o link que enviamos na caixa de entrada.');
  }
  if (/invalid login credentials/i.test(msg)) {
    return new Error('Email ou senha inválidos.');
  }
  if (/rate|too many/i.test(msg)) {
    return new Error('Muitas tentativas. Tente novamente em alguns minutos.');
  }
  return new Error(msg || 'Não foi possível processar a solicitação. Tente novamente.');
};

export const registerMentorando = async (input: {
  name: string;
  email: string;
  password: string;
}): Promise<RegisterResult> => {
  const email = input.email.trim().toLowerCase();
  const password = input.password.trim();
  const name = input.name.trim();

  if (!name || !email || !password) {
    throw new Error('Preencha nome, email e senha.');
  }
  if (password.length < 8) {
    throw new Error('A senha precisa ter pelo menos 8 caracteres.');
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: getSignupRedirectUrl(),
    },
  });

  if (error) throw translateAuthError(error);

  // Sem sessão retornada = Supabase está exigindo confirmação por email.
  const needsEmailConfirmation = !data.session;
  const user = toMentorandoUser(data.user, email);
  return { needsEmailConfirmation, user };
};

export const loginMentorando = async (input: { email: string; password: string }): Promise<MentorandoUser> => {
  const email = input.email.trim().toLowerCase();
  const password = input.password.trim();

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw translateAuthError(error);

  const user = toMentorandoUser(data.user, email);
  if (!user) throw new Error('Login incompleto. Tente novamente.');
  return user;
};

export const logoutMentorando = async (): Promise<void> => {
  await supabase.auth.signOut();
};

// Pré-check opcional no cliente antes do signUp. O trigger do DB é a fonte da
// verdade — esta função apenas melhora a UX ao falhar antes de enviar senha.
export const isEmailAllowed = async (email: string): Promise<boolean> => {
  const normalized = email.trim().toLowerCase();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);
  try {
    const response = await fetch(`/api/is-paid-email?email=${encodeURIComponent(normalized)}`, {
      signal: controller.signal,
    });
    if (!response.ok) return false;
    const data = (await response.json()) as { allowed?: boolean };
    return Boolean(data.allowed);
  } catch {
    return false;
  } finally {
    clearTimeout(timeoutId);
  }
};

export { toMentorandoUser };
