-- == TABLE: souvenirs ==
-- ID: string (primary, fixed)
-- name: string
-- price: number (cents / integer)
-- category: enum ('budget-fit' | 'hemat' | 'eksklusif')
-- image: string
-- link: string
-- description: string

CREATE TABLE IF NOT EXISTS souvenirs (
  id              TEXT PRIMARY KEY,
  name            TEXT NOT NULL,
  price           INTEGER NOT NULL,
  category        TEXT NOT NULL CHECK (category IN ('budget-fit', 'hemat', 'eksklusif')),
  image           TEXT NOT NULL,
  link            TEXT,
  description     TEXT
);

-- == TABLE: share_events ==
-- id: uuid
-- souvenir_id: string
-- event_type: enum ('copy_link' | 'share_wa')
-- timestamp: timestamptz
-- guest_count: integer
-- coffee_cost: integer
-- total: integer

CREATE TABLE IF NOT EXISTS share_events (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  souvenir_id   TEXT,
  event_type    TEXT NOT NULL CHECK (event_type IN ('copy_link', 'share_wa')),
  timestamp     TIMESTAMPTZ DEFAULT NOW(),
  guest_count   INTEGER,
  coffee_cost   INTEGER,
  total         INTEGER
);

-- == SEED DATA: souvenirs ==
INSERT INTO souvenirs (id, name, price, category, image, link, description) VALUES
('1', 'Reed Diffuser Aromaterapi', 25000, 'eksklusif', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB37vrFDl8lha654jxDUyWC7o55rh18Is6E8Z-VBy8Ate_LtZ1G5ZTO7Wf5gRXwpEDupcmMrVVfJRd9tOQ-aiM5MMYZkJvZK0_kZCQYGi_2NMgpMgX2h2bRRehWFMgtf6GamMeEBxbdtQisO0YH0fLLIVsrqgd-swqG6NBNW1x1VGYkst1kY5D28-XuKwLMabVIEesY4nHGzJLAptQ6yQbpNBPD0-hykJ-T4NSn2LD6VZfzpu-Jd_vn', '#', 'Botol kaca estetik 30ml lengkap dengan stick rotan dan box kartu ucapan kustom.'),
('2', 'Cutlery Set Kayu Aesthetic', 30000, 'eksklusif', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp_izPFmWDJ2K2v6Q1OBsFlnHE3O-DJBGVVo1DrBX7kb4mzZeCmGwotOEGFiEnVrqb0HXpGugCpzBUsp-g98ulmM3X9_Bt0Fy6SGVnqaRUGo1exCeajXe3IztvPlurcyQNtIz7mwJWvF4esCO_Oiqg5AM7Q5sFeSqJl6s5O1tgH90dMlpsNynGnAGqqR9oLocmhSYWewnLzOLV8IiLikATK52kveZhR5aWExcz85j7Df4ulaOnLFMm', '#', 'Sendok, garpu, dan sumpit kayu jati natural dipadukan pouch kanvas tali rami.'),
('3', 'Scented Candle Botanical', 8000, 'hemat', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCusO9X7xh5jzyCJdtVpFIsahEuWwlcpwrk6vcNRgkR2feIPPEcdzAmhCdXn2hn6adUUhRPsflXlluzJEg0GUzeeIP5zIYomQ8nsZaH_A721lDcK6v5sXu3k8nn5wN2l1o-rzDd8HwdsGx-IkxS_rb00zabYyMSa_Kn2tw-hhgTu9WerbA_OPncjOdb_ktbbv46NSKw4e7-IlMJZLs1ozcYbDITDU5sXIOyNwJ9rp1CqfsnEvZ73p0s', '#', 'Lilin kedelai wangi lavender dan vanilla dalam kaleng aluminium bergaya vintage.'),
('4', 'Tea Strainer Emas Elegan', 7500, 'hemat', 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-CEFRG1B2J4J482DuC_INv4wjdDJJFnn7c1ff2SfGhZHzLmIPAF1yPjYx3Y6BgxTpd5FcbdM5GHwU9UfmHBYg3khJGfXm3OH8t-EjTNz8Si8hY26fJlvxuoDcLMDZvEodaMavsQLqjtPhgZCuvEIE1ZMb1U9xln3Gh0w6tX_nPLC56hnHCOOS1sciKSqlfDXCk6KWWOTvlqr-CEc_rUTr3kZWFxvyz99sYQWb-uwQPgxjkTniKACY', '#', 'Saringan teh stainless steel anti karat warna emas gold lengkap dengan gantungan liontin.'),
('5', 'Linen Pouch Serbaguna', 9500, 'budget-fit', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDizufDWxskqBx9EydsO49DzyUUYE6USrAbfNUQLu5MryLc_I46YTvoHWhcDuvAw8lL-EQL7mLJjGCUUh0Q7yRIHK4fsQcLUpSA5YW_3ya5rSmijligyvuEkeLF7NWy3ZM4AcyUnOM-3P1clJgdfnxM8vY3nGNmNrMDGKPykTDg6DDL1bPPFM07qUBcVfMd8RoNab7wL71nzNmuT2fHg8ptGAgeBEZXYbR5pq6jLbUbrpxySGJViyna', '#', 'Pouch kain blacu katun premium dengan sablon inisial pengantin monogram minimalis.'),
('6', 'Artisan Soap Bar Alami', 10000, 'budget-fit', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYkz9xIzMKieFUm-7U0eW0hxdi8MMHC7WUB-Jmn6BRwjh0bvYCn8P9FVz9T2Pw2GgAKUBZ5czZG95d6__PieEM-MZClbeFF25ErD4hD8DqNCJKDTv3qoa4R95lJ7IyqnA6fHiZKYOmUDyuQTxaGH8viK6IvzRVkiy2tAuC9Cl0JWPKlU3ysDnMHZ6ZXiRNc2eUzASC8D7WbdSWqXmJhOeCNbbcpgjZcdnR0d1F5fZajV3C2ybBTDCO', '#', 'Sabun batang herbal minyak kelapa dan oatmeal dengan aroma relaksasi bunga melati.');
