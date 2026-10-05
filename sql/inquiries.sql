create table if not exists public.inquiries (
  id bigint generated always as identity primary key,
  company text not null,
  email text not null,
  country text not null,
  location text not null,
  scope text not null,
  start_date text,
  details text not null default '',
  locale text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;
grant usage on schema public to service_role;
grant insert on public.inquiries to service_role;

-- No public policies: inserts use the server-only secret key in the API route.
