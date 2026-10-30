import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbDir = path.join(process.cwd(), 'db');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'shares.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS shares (
    id TEXT PRIMARY KEY,
    budget TEXT,
    guests TEXT,
    coffeePkg TEXT,
    coffeeCost TEXT,
    total TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;
