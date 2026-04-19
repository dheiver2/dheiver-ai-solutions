-- mentorando_progress: persiste o checklist de evolução por usuário, sincronizado
-- entre dispositivos. Antes ficava só em localStorage e perdia ao trocar de browser.

create table if not exists public.mentorando_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_key text not null,
  done boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, item_key)
);

create index if not exists mentorando_progress_user_id_idx
  on public.mentorando_progress (user_id);

alter table public.mentorando_progress enable row level security;

drop policy if exists "mentorando_progress_select_own" on public.mentorando_progress;
create policy "mentorando_progress_select_own"
  on public.mentorando_progress
  for select
  using (auth.uid() = user_id);

drop policy if exists "mentorando_progress_insert_own" on public.mentorando_progress;
create policy "mentorando_progress_insert_own"
  on public.mentorando_progress
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "mentorando_progress_update_own" on public.mentorando_progress;
create policy "mentorando_progress_update_own"
  on public.mentorando_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "mentorando_progress_delete_own" on public.mentorando_progress;
create policy "mentorando_progress_delete_own"
  on public.mentorando_progress
  for delete
  using (auth.uid() = user_id);
