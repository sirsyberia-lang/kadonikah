create table shares (
  id text primary key,
  budget text,
  guests text,
  coffeePkg text,
  coffeeCost text,
  total text,
  createdAt timestamp with time zone default now()
);

-- Tabel untuk Menyimpan Content & Data V2 (Souvenirs, Vendors, Articles)
create table if not exists contents (
  key text primary key,
  data jsonb not null,
  updated_at timestamp with time zone default now()
);
