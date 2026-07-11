-- Event House — Android waitlist table.
-- Run this in the Supabase SQL editor (free plan is fine), then set
-- SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local (see .env.example).
-- Inserts happen server-side only (Next.js route handler) with the service
-- role key, so no anon policies are required.

create table if not exists public.android_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.android_waitlist enable row level security;
