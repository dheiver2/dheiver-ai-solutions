-- paid_customers: rastreia quem pagou a mentoria (webhook Stripe insere aqui).
-- is-paid-email consulta esta tabela para liberar cadastro na área do mentorando.

create table if not exists public.paid_customers (
  id bigserial primary key,
  email text not null,
  email_normalized text generated always as (lower(trim(email))) stored,
  stripe_session_id text not null unique,
  stripe_customer_id text,
  amount_total integer,
  currency text,
  name text,
  paid_at timestamptz not null default now(),
  raw_session jsonb
);

create index if not exists paid_customers_email_normalized_idx
  on public.paid_customers (email_normalized);

create index if not exists paid_customers_stripe_customer_id_idx
  on public.paid_customers (stripe_customer_id);

alter table public.paid_customers enable row level security;

-- Sem policies públicas: somente a service role key (usada nos endpoints serverless
-- api/stripe-webhook.ts e api/is-paid-email.ts) escreve/lê nesta tabela.
