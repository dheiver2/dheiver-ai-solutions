export interface MentorandoUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface StoredUser extends MentorandoUser {
  passwordHash: string;
  passwordSalt: string;
  password?: string;
}

interface Session {
  user: MentorandoUser;
  expiresAt: number;
}

const USERS_KEY = 'mentorando_users';
const SESSION_KEY = 'mentorando_session';
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const PBKDF2_ITERATIONS = 100_000;

export const ALLOWED_MENTORANDO_EMAILS: string[] = [
  'dheiver.santos@gmail.com',
];

const isInStaticAllowlist = (email: string): boolean => {
  const normalized = email.trim().toLowerCase();
  return ALLOWED_MENTORANDO_EMAILS.map((item) => item.trim().toLowerCase()).includes(normalized);
};

export const isEmailAllowed = async (email: string): Promise<boolean> => {
  const normalized = email.trim().toLowerCase();

  if (isInStaticAllowlist(normalized)) {
    return true;
  }

  try {
    const response = await fetch(`/api/is-paid-email?email=${encodeURIComponent(normalized)}`);
    if (!response.ok) return false;
    const data = (await response.json()) as { allowed?: boolean };
    return Boolean(data.allowed);
  } catch {
    return false;
  }
};

const canUseStorage = () => typeof window !== 'undefined';

const generateId = (): string =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

const toHex = (buffer: ArrayBuffer): string =>
  Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');

const fromHex = (hex: string): Uint8Array => {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
};

const generateSalt = (): string => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return toHex(bytes.buffer);
};

const hashPassword = async (password: string, saltHex: string): Promise<string> => {
  const enc = new TextEncoder();
  const salt = fromHex(saltHex);
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const derived = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    256
  );
  return toHex(derived);
};

const constantTimeEqual = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
};

const getUsers = (): StoredUser[] => {
  if (!canUseStorage()) return [];

  try {
    const stored = localStorage.getItem(USERS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erro ao ler mentorandos:', error);
    return [];
  }
};

const saveUsers = (users: StoredUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const stripCredentials = (user: StoredUser): MentorandoUser => ({
  id: user.id,
  name: user.name,
  email: user.email,
  createdAt: user.createdAt,
});

const persistSession = (user: MentorandoUser): void => {
  const session: Session = {
    user,
    expiresAt: Date.now() + SESSION_TTL_MS,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getCurrentMentorando = (): MentorandoUser | null => {
  if (!canUseStorage()) return null;

  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Session | MentorandoUser;
    // Legacy session (pre-TTL): plain user object without expiresAt — clear it.
    if (!('expiresAt' in parsed) || !('user' in parsed)) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    return parsed.user;
  } catch (error) {
    console.error('Erro ao ler sessão do mentorando:', error);
    return null;
  }
};

export const isMentorandoAuthenticated = (): boolean => Boolean(getCurrentMentorando());

export const registerMentorando = async (input: {
  name: string;
  email: string;
  password: string;
}): Promise<MentorandoUser> => {
  if (!canUseStorage()) {
    throw new Error('Cadastro indisponível neste ambiente.');
  }

  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedName = input.name.trim();
  const normalizedPassword = input.password.trim();

  if (!normalizedName || !normalizedEmail || !normalizedPassword) {
    throw new Error('Preencha nome, email e senha.');
  }

  const allowed = await isEmailAllowed(normalizedEmail);
  if (!allowed) {
    throw new Error('Este email ainda não foi liberado. Confirme o pagamento e aguarde o email com as credenciais.');
  }

  const users = getUsers();
  const userExists = users.some((user) => user.email === normalizedEmail);

  if (userExists) {
    throw new Error('Já existe um cadastro com este email.');
  }

  const passwordSalt = generateSalt();
  const passwordHash = await hashPassword(normalizedPassword, passwordSalt);

  const newUser: StoredUser = {
    id: generateId(),
    name: normalizedName,
    email: normalizedEmail,
    passwordHash,
    passwordSalt,
    createdAt: new Date().toISOString(),
  };

  saveUsers([...users, newUser]);
  const publicUser = stripCredentials(newUser);
  persistSession(publicUser);

  return publicUser;
};

export const loginMentorando = async (input: { email: string; password: string }): Promise<MentorandoUser> => {
  if (!canUseStorage()) {
    throw new Error('Login indisponível neste ambiente.');
  }

  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedPassword = input.password.trim();

  const users = getUsers();
  const user = users.find((item) => item.email === normalizedEmail);

  if (!user) {
    throw new Error('Email ou senha inválidos.');
  }

  // Migration path: legacy users stored plain-text password. Verify, then upgrade to hash on first successful login.
  if (!user.passwordHash && user.password) {
    if (user.password !== normalizedPassword) {
      throw new Error('Email ou senha inválidos.');
    }
    const passwordSalt = generateSalt();
    const passwordHash = await hashPassword(normalizedPassword, passwordSalt);
    const upgraded: StoredUser = {
      ...user,
      passwordHash,
      passwordSalt,
    };
    delete upgraded.password;
    const updatedUsers = users.map((item) => (item.id === user.id ? upgraded : item));
    saveUsers(updatedUsers);
    const publicUser = stripCredentials(upgraded);
    persistSession(publicUser);
    return publicUser;
  }

  const candidateHash = await hashPassword(normalizedPassword, user.passwordSalt);
  if (!constantTimeEqual(candidateHash, user.passwordHash)) {
    throw new Error('Email ou senha inválidos.');
  }

  const publicUser = stripCredentials(user);
  persistSession(publicUser);
  return publicUser;
};

export const logoutMentorando = (): void => {
  if (!canUseStorage()) return;
  localStorage.removeItem(SESSION_KEY);
};
