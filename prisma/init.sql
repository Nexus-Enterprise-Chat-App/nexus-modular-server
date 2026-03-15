-- ─────────────────────────────────────────────────────────────────────────────
-- Nexus — PostgreSQL Initialisation SQL
-- Run automatically by Docker Compose on first start
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable trigram extension for full-text search
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Enable uuid-ossp for uuid generation fallback
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─────────────────────────────────────────────────────────────────────────────
-- NOTE: Message table hash partitioning
-- ─────────────────────────────────────────────────────────────────────────────
-- In production (Aurora), after running prisma migrate deploy, apply this DDL
-- to convert the messages table to a partitioned table:
--
-- Step 1: Rename existing table
--   ALTER TABLE messages RENAME TO messages_old;
--
-- Step 2: Create partitioned parent table (identical schema)
--   CREATE TABLE messages (LIKE messages_old INCLUDING ALL)
--     PARTITION BY HASH (room_id);
--
-- Step 3: Create N partitions (8 is a good starting point)
--   CREATE TABLE messages_p0 PARTITION OF messages FOR VALUES WITH (MODULUS 8, REMAINDER 0);
--   CREATE TABLE messages_p1 PARTITION OF messages FOR VALUES WITH (MODULUS 8, REMAINDER 1);
--   ... (repeat for p2 through p7)
--
-- Step 4: Migrate data
--   INSERT INTO messages SELECT * FROM messages_old;
--   DROP TABLE messages_old;
--
-- For DM-only messages (room_id IS NULL), use a default partition:
--   CREATE TABLE messages_dm PARTITION OF messages DEFAULT;
-- ─────────────────────────────────────────────────────────────────────────────
