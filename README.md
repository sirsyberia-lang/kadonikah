# KadoNikah.id — Wedding Souvenir Estimator

Repo ini digunakan untuk development platform **KadoNikah.id**, estimatorBudget souvenir pernikahan. Saat ini repository menyimpan dua jalur versi visual/fitur secara paralel:

## Project Versions

### V1 — Legacy
- Path: `pages/` (root)
- Route utama: `/`, `/kalkulator`
- Tema: Maroon `#712342` + Gold `#735c00` + Blush `#fff8f8`
- Komponen inti: `pages/kalkulator.tsx`, `pages/coffeebar.tsx`, `pages/katalog.tsx`, `pages/vendor.tsx`
- Nav: `components/Navbar.tsx`, `components/DesktopHeader.tsx`
- Catatan: V1 tetap dirawat untuk kompatibilitas route lama.

### V2 — Premium Champagne/Rose Gold
- Path: `pages/v2/`
- Route utama: `/v2`, `/v2/index`
- Tema: Champagne `#FAF8F5/#F5EFE6` + Rose Gold `#DC4456` + Sage `#5A826B`
- Komponen inti: `pages/v2/index.tsx`
- Fitur unggulan:
  - Kalkulator budget dengan format ribuan
  - Wedding Coffee Bar toggle + paket
  - Rekomendasi souvenir dengan filter + sorting termurah → termahal
  - Tombol Salin Link + Share WhatsApp
  - Consultation banner custom packaging

## Tech Stack
- Next.js Pages Router + Turbopack
- React Client Components (`'use client'`)
- Tailwind CSS + custom palette inline untuk konsistensi HMR

## Development
- Staging: `http://192.168.1.227:3000`
- Default port: `3000`
- Run: `npm run dev`
- Jika HMR reload terus, coba `rm -rf .next && fuser -k 3000/tcp 2>/dev/null; sleep 1 && PORT=3000 npm run dev`

## Team
- Product/Design: Bapuksz Corp
- Frontend: Blay-dev
- QA: Vangke
- PM: Nyet

---
Dibuat dan dirawat oleh **Bapuksz Corp** untuk platform **KadoNikah.id**.
