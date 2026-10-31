# PROJECT LOGS — BAPUKSZ CORP

## 1. Project KadoNikah V1 (Legacy)
- **Status**: Done & Archived
- **Description**: Landing page, kalkulator budget awal, halaman catalog, coffee bar, & vendor directory versi 1.
- **Routes**:
  - `/` & `/kalkulator` (Kalkulator Budget V1)
  - `/coffeebar` (Showcase Coffee Bar)
  - `/katalog` (Katalog Souvenir)
  - `/vendor` (Direktori Vendor)
- **Visual Design**: Maroon (`#712342`), Gold (`#735c00`), Blush Pink (`#fff8f8`).

---

## 2. Project KadoNikah V2 (New Luxury)
- **Status**: Active & Main Focus
- **Description**: Desktop & Mobile Redesign Luxury Champagne & Rose Gold dengan alur integrasi souvenir calculator, coffee bar catering, live filter & sorting, serta kemudahan share link.
- **Routes**:
  - `/v2` (Kalkulator Budget Premium Luxury)
- **Visual Design**: Champagne (`#FAF8F5`/`#F5EFE6`), Rose Gold (`#DC4456`), Sage (`#5A826B`).
- **Fitur Utama**:
  1. Input Budget Real-time dengan Separator Ribuan (`5.000.000`).
  2. Integration Coffee Bar Live Booth (Petite, Medium, Grande).
  3. Badge Rekomendasi Real-time (Pas, Hemat, Nambah) disort dari yang termurah ke termahal.
  4. Quick Actions: Tombol **🔗 Salin Link** (dgn fallback clipboard & toast notif) dan **💬 Share WA** (dengan preset pesan komplit).
  5. Banner Konsultasi Custom Packaging.
  6. Palette konsisten V2: champagne, roseGold, dustyRose, sage — tanpa amber/pink mentah.
  7. Coffee Bar card pakai palet champagne + dustyRose badge.
  8. Total Estimasi card: bg roseGold-50, header ALOKASI PER UNIT roseGold-900, total value dustyRose-700.
  9. Logic update: "Souvenir Base" → "Souvenir Cost" — jika souvenir dipilih, angkanya update otomatis.
  10. Hitung total = Souvenir Cost (harga×tamu) + Coffee Bar Cost.
  11. Toast: 1 icon, diletakkan di atas tombol Salin/Share di dalam Total Card (overflow-visible). Hilangkan toast fixed duplicate di bawah.
  12. Card Total Estimasi: hapus border-t pembatas pada header, rapatkan spacing (space-y-2), jarak antara komponen diperkecil (mt-4).
  13. Footer mobile full: tambah `pb-16` di `<main>` agar footer tidak tertutup viewport; logo "Souvenir Murah" `text-white` agar terlihat di dark bg.
  14. Souvenir list dynamic via Supabase (`souvenirs` table) — fallback otomatis ke static `data/souvenirs.ts` jika offline.
  15. Track share events ke Supabase table `share_events` saat user klik **Salin Link** / **Share WA** (via `/api/share_event`).
  16. CMS Dashboard `/v2/cms` (oleh Nyet, dirapikan Blay):
      - Tab **🎁 Kelola Souvenir**: form tambah/edit/hapur souvenir + list card
      - Tab **📈 Log Share WA & Salin Link**: table analytics dari `share_events`
      - Tab **💻 Direct JSON Editor**: edit JSON konten langsung (legacy `contents` table mode)
  17. Data CMS menggunakan Supabase (`souvenirs` table) dengan local fallback; tab analytics menampilkan `share_events`.
