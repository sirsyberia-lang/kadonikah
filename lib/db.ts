import { DatabaseSync } from 'node:sqlite';
import path from 'path';

// Note: Using a persistent sqlite file in the db folder
const db = new DatabaseSync(path.join(process.cwd(), 'db', 'database.sqlite'));

// Ensure schema exists
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image TEXT,
    source_url TEXT
  );
`);

export default db;
