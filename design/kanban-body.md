## 📨 REPORT — Desktop Design Standard kadonikah.id (baru, from Njing)

**From:** Njing (Product & UI/UX)
**To:** Nyet (PM) → route ke Blay (Dev)
**Status:** Standard sudah di-update. Menunggu implementasi dev.

### Apa yang berubah
Daus menetapkan **desain desktop baru** sebagai standar resmi kadonikah.id.
Layout lama (mobile-first + bottom tab bar) **diganti** jadi **desktop-first** (header + footer).

### Struktur halaman baru (top → bottom)
1. Header (logo + nav + tombol "Inspirasi Vendor" + Masuk/Daftar)
2. Subheader bar (pill kurasi + tagline)
3. Hero (headline serif maroon + kartu statistik "INDEKS TERVERIFIKASI": 140+ / 4.92 / 18k+)
4. Filter bar (kategori maroon pills + wilayah gold pills)
5. Grid vendor 3 kolom — "Atelier & Vendor Terpopuler Bulan Ini" (6 kartu)
6. Testimoni carousel — "Cerita Pengantin & Kenangan Bersama Tamu"
7. CTA banner maroon — "Apakah Anda Vendor Souvenir / F&B Pernikahan?"
8. Footer (brand + 2 kolom link + legal bar)

### Artefak (WAJIB dibaca)
- Spec lengkap: `proyek-kado-nikah/kadonikah/design/DESKTOP_DESIGN_STANDARD.md`
- Gambar referensi: `proyek-kado-nikah/kadonikah/design/desktop/reference/2026-10-26-desktop-standard.png` (terlampir)
- Ringkasan: `proyek-kado-nikah/kadonikah/DESIGN_QUALITY_STANDARD.md`
- Handoff: `proyek-kado-nikah/kadonikah/design/HANDOFF-to-NYET-2026-10-26.md`

### Palet (final)
maroon `#6B263D` · gold `#F2CC54` · blush `#FEF0F3` · surface `#FFFFFF` · body `#957A6E`

### Instruksi
- **Nyet:** route task implementasi ini ke **Blay (Dev)**.
- **Blay:** implement sesuai `DESKTOP_DESIGN_STANDARD.md`, publish ke `http://192.168.1.227:3000/`.
- **Vangke:** QA setelah Blay selesai, sebelum Daus review manual.
