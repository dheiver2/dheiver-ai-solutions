export interface MentorandoUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const USERS_KEY = 'mentorando_users';
const SESSION_KEY = 'mentorando_session';

// Allowlist de quem pagou a mentoria e pode criar cadastro na area.
// Adicione o email (minusculo) apos confirmar o pagamento no Stripe.
export const ALLOWED_MENTORANDO_EMAILS: string[] = [
  'dheiver.santos@gmail.com',
];

export const isEmailAllowed = (email: string): boolean => {
  const normalized = email.trim().toLowerCase();
  return ALLOWED_MENTORANDO_EMAILS.map((item) => item.trim().toLowerCase()).includes(normalized);
};

const canUseStorage = () => typeof window !== 'undefined';

const generateId = (): string =>
  `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

const getUsers = (): MentorandoUser[] => {
  if (!canUseStorage()) return [];

  try {
    const stored = localStorage.getItem(USERS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erro ao ler mentorandos:', error);
    return [];
  }
};

const saveUsers = (users: MentorandoUser[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentMentorando = (): MentorandoUser | null => {
  if (!canUseStorage()) return null;

  try {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error('Erro ao ler sessao do mentorando:', error);
    return null;
  }
};

export const isMentorandoAuthenticated = (): boolean => Boolean(getCurrentMentorando());

export const registerMentorando = (input: {
  name: string;
  email: string;
  password: string;
}): MentorandoUser => {
  if (!canUseStorage()) {
    throw new Error('Cadastro indisponivel neste ambiente.');
  }

  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedName = input.name.trim();
  const normalizedPassword = input.password.trim();

  if (!normalizedName || !normalizedEmail || !normalizedPassword) {
    throw new Error('Preencha nome, email e senha.');
  }

  if (!isEmailAllowed(normalizedEmail)) {
    throw new Error('Este email ainda nao foi liberado. Confirme o pagamento e aguarde o email com as credenciais.');
  }

  const users = getUsers();
  const userExists = users.some((user) => user.email === normalizedEmail);

  if (userExists) {
    throw new Error('Ja existe um cadastro com este email.');
  }

  const newUser: MentorandoUser = {
    id: generateId(),
    name: normalizedName,
    email: normalizedEmail,
    password: normalizedPassword,
    createdAt: new Date().toISOString(),
  };

  const updatedUsers = [...users, newUser];
  saveUsers(updatedUsers);
  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));

  return newUser;
};

export const loginMentorando = (input: { email: string; password: string }): MentorandoUser => {
  if (!canUseStorage()) {
    throw new Error('Login indisponivel neste ambiente.');
  }

  const normalizedEmail = input.email.trim().toLowerCase();
  const normalizedPassword = input.password.trim();

  const user = getUsers().find(
    (item) => item.email === normalizedEmail && item.password === normalizedPassword
  );

  if (!user) {
    throw new Error('Email ou senha invalidos.');
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
};

export const logoutMentorando = (): void => {
  if (!canUseStorage()) return;
  localStorage.removeItem(SESSION_KEY);
};
