create table shares (
  id text primary key,
  budget text,
  guests text,
  coffeePkg text,
  coffeeCost text,
  total text,
  createdAt timestamp with time zone default now()
);
