import { DatabaseSync } from 'node:sqlite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(__dirname, 'data');
const DB_PATH = path.join(DATA_DIR, 'academy.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

let db = null;

export function getDb() {
  if (db) return db;
  db = new DatabaseSync(DB_PATH);
  db.exec('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL;');
  // ensure schema
  if (fs.existsSync(SCHEMA_PATH)) {
    const schema = fs.readFileSync(SCHEMA_PATH, 'utf-8');
    db.exec(schema);
  }
  return db;
}

export function closeDb() {
  if (db) { db.close(); db = null; }
}

// Helpers
export function all(sql, params = []) { return getDb().prepare(sql).all(...params); }
export function get(sql, params = []) { return getDb().prepare(sql).get(...params); }
export function run(sql, params = []) { return getDb().prepare(sql).run(...params); }
export function exec(sql) { return getDb().exec(sql); }

// Health
export function dbStats() {
  const d = getDb();
  const tables = d.prepare("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name").all();
  const counts = {};
  for (const t of tables) {
    try { counts[t.name] = d.prepare(`SELECT COUNT(*) as c FROM "${t.name}"`).get().c; } catch { counts[t.name] = 0; }
  }
  return { path: DB_PATH, tables: tables.map(t=>t.name), counts };
}
