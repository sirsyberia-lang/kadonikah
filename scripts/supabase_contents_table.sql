-- == TABLE: contents (CMS content management) ==
-- Used by /v2/cms page to manage dynamic content (e.g. souvenir catalog, vendor list)
CREATE TABLE IF NOT EXISTS contents (
  id          BIGSERIAL PRIMARY KEY,
  key         TEXT UNIQUE NOT NULL,
  data        JSONB DEFAULT '{}',
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- == SEED: initial catalog content from static souvenirs ==
-- key: 'v2_katalog' -> JSON array of souvenir objects
-- key: 'v2_vendor' -> JSON array of vendor objects (to be managed via CMS later)

INSERT INTO contents (key, data, updated_at)
VALUES
('v2_katalog', '[<catalog_data>]', NOW()),
('v2_vendor', '[]', NOW())
ON CONFLICT (key) DO UPDATE
  SET data = EXCLUDED.data,
      updated_at = EXCLUDED.updated_at;
