import { DatabaseSync } from 'node:sqlite';

const db = new DatabaseSync('/home/bapuksz/proyek-kado-nikah/kadonikah/db/database.sqlite');

// Ensure products table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    image TEXT,
    source_url TEXT,
    marketplaceLinks TEXT
  )
`);

export default db;
