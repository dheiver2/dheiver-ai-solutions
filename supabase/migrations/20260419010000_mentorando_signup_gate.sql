-- Gate de cadastro na área do mentorando.
-- Bloqueia INSERT em auth.users se o email não está em paid_customers nem na
-- whitelist manual. O cliente chama supabase.auth.signUp normalmente; Supabase
-- retorna o erro da exception e o front mapeia para mensagem amigável.

create table if not exists public.mentorando_whitelist (
  email_normalized text primary key,
  note text,
  created_at timestamptz not null default now()
);

-- Owner bypass (útil para testes/suporte sem precisar pagar).
insert into public.mentorando_whitelist (email_normalized, note)
values ('dheiver.santos@gmail.com', 'owner')
on conflict (email_normalized) do nothing;

create or replace function public.check_mentorando_signup_allowed()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  normalized text := lower(trim(new.email));
begin
  if exists (select 1 from public.paid_customers where email_normalized = normalized)
     or exists (select 1 from public.mentorando_whitelist where email_normalized = normalized)
  then
    return new;
  end if;

  raise exception using
    errcode = 'P0001',
    message = 'mentorando_email_not_paid',
    hint = 'Este email ainda não foi liberado. Use o mesmo email do pagamento.';
end;
$$;

drop trigger if exists enforce_paid_email_before_signup on auth.users;
create trigger enforce_paid_email_before_signup
  before insert on auth.users
  for each row execute function public.check_mentorando_signup_allowed();
