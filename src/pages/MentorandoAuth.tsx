import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, LockKeyhole, Mail, Sparkles, UserPlus } from 'lucide-react';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useMentorandoSession } from '@/hooks/useMentorandoSession';
import { loginMentorando, registerMentorando } from '@/lib/mentorandoAuth';

const MentorandoAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user: sessionUser, loading: sessionLoading } = useMentorandoSession();
  const redirectTo = location.state?.from?.pathname || '/area-mentorando';

  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionLoading && sessionUser) {
      navigate(redirectTo, { replace: true });
    }
  }, [sessionUser, sessionLoading, navigate, redirectTo]);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const user = await loginMentorando(loginData);
      toast({
        title: 'Login realizado',
        description: `${user.name}, sua área do mentorando está liberada.`,
      });
      navigate(redirectTo, { replace: true });
    } catch (error) {
      toast({
        title: 'Não foi possível entrar',
        description: error instanceof Error ? error.message : 'Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await registerMentorando(registerData);
      if (result.needsEmailConfirmation) {
        setPendingVerificationEmail(registerData.email.trim().toLowerCase());
        toast({
          title: 'Confirme seu email',
          description: 'Enviamos um link de confirmação. Abra sua caixa de entrada para liberar o acesso.',
        });
      } else {
        toast({
          title: 'Cadastro criado',
          description: `${result.user?.name ?? 'Bem-vindo(a)'}, sua área do mentorando está liberada.`,
        });
        navigate(redirectTo, { replace: true });
      }
    } catch (error) {
      toast({
        title: 'Não foi possível cadastrar',
        description: error instanceof Error ? error.message : 'Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,#050816_0%,#0B1020_45%,#050816_100%)]" />

      <main className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <section className="max-w-2xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para mentoria
          </Link>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
            <LockKeyhole className="h-4 w-4" />
            Acesso restrito ao mentorando
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Cadastre-se ou faça login para entrar na área do mentorando.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            O acesso agora exige identificação para liberar a trilha, os vídeos e o material de apoio de quem está se preparando para Engenharia de IA Júnior.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              'Acesso exclusivo para quem comprou a mentoria.',
              'Primeiro acesso usa o mesmo email do pagamento.',
              'Login salvo no navegador para retorno mais simples.',
              'Dúvidas? Chame o Dheiver direto no WhatsApp.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400 text-black">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Portal do Mentorando</p>
              <p className="text-sm text-slate-400">Entre para acessar a trilha protegida</p>
            </div>
          </div>

          {pendingVerificationEmail ? (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-300">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Confirme seu email</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Enviamos um link de confirmação para{' '}
                  <strong className="text-white">{pendingVerificationEmail}</strong>. Clique no link do email para liberar sua conta.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Não chegou em 2 minutos? Confira a pasta de spam ou tente de novo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPendingVerificationEmail(null)}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 px-4 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
              >
                Voltar para login
              </button>
            </div>
          ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-[#0D1427] p-1">
              <TabsTrigger value="login" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-slate-950">
                Cadastro
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form className="space-y-5" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-slate-200">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="voce@exemplo.com"
                    value={loginData.email}
                    onChange={(event) => setLoginData((current) => ({ ...current, email: event.target.value }))}
                    className="h-12 rounded-xl border-white/10 bg-[#0D1427] text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-slate-200">Senha</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Sua senha"
                    value={loginData.password}
                    onChange={(event) => setLoginData((current) => ({ ...current, password: event.target.value }))}
                    className="h-12 rounded-xl border-white/10 bg-[#0D1427] text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-amber-400 px-5 text-sm font-bold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Entrando...' : 'Entrar na área'}
                </button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <div className="mb-5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
                <p className="font-semibold text-amber-200">Já comprou a mentoria?</p>
                <p className="mt-1 text-amber-100/80">
                  Use o mesmo email do pagamento — o acesso é liberado automaticamente assim que o Stripe confirma a compra. Se der erro, confira o email do recibo ou me chame no WhatsApp.
                </p>
              </div>
              <form className="space-y-5" onSubmit={handleRegister}>
                <div className="space-y-2">
                  <Label htmlFor="register-name" className="text-slate-200">Nome</Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Seu nome"
                    value={registerData.name}
                    onChange={(event) => setRegisterData((current) => ({ ...current, name: event.target.value }))}
                    className="h-12 rounded-xl border-white/10 bg-[#0D1427] text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-slate-200">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="voce@exemplo.com"
                    value={registerData.email}
                    onChange={(event) => setRegisterData((current) => ({ ...current, email: event.target.value }))}
                    className="h-12 rounded-xl border-white/10 bg-[#0D1427] text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-slate-200">Senha</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Crie uma senha"
                    value={registerData.password}
                    onChange={(event) => setRegisterData((current) => ({ ...current, password: event.target.value }))}
                    className="h-12 rounded-xl border-white/10 bg-[#0D1427] text-white placeholder:text-slate-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <UserPlus className="h-4 w-4" />
                  {isSubmitting ? 'Criando cadastro...' : 'Criar cadastro e entrar'}
                </button>
              </form>
            </TabsContent>
          </Tabs>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MentorandoAuth;
