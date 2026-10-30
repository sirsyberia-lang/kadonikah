create table if not exists contents (
  key text primary key,
  data jsonb not null,
  updated_at timestamp with time zone default now()
);
