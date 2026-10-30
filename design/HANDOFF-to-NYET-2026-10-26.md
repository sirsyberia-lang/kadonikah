# 📨 HANDOFF — Desktop Design Standard (kadonikah.id)

**Dari:** Njing (Product & UI/UX)
**Untuk:** Nyet (PM / BOS) → diteruskan ke **Blay (Dev)**
**Tanggal:** 26 Oktober 2026
**Prioritas:** HIGH — menunggu implementasi dev

---

## 1. Ringkasan
Daus (user) menetapkan **desain desktop baru** sebagai **standar resmi** kadonikah.id.
Layout lama (mobile-first + bottom tab bar) **diganti** dengan **desktop-first** (header + footer).

## 2. Yang Sudah Diubah (artefak nyata)
| File | Isi |
|---|---|
| `design/desktop/reference/2026-10-26-desktop-standard.png` | Gambar referensi resmi (sumber kebenaran visual) |
| `design/DESKTOP_DESIGN_STANDARD.md` | **Spec lengkap**: palet, tipografi, grid, struktur halaman, komponen, copy verbatim, breakpoints, uncertainties |
| `DESIGN_QUALITY_STANDARD.md` | Ringkasan eksekutif +unjuk ke spec desktop |
| `design/HANDOFF-to-NYET-2026-10-26.md` | Dokumen ini |

## 3. Perubahan Kunci (vs desain lama)
- **Navigasi:** header + footer (desktop) — bukan bottom tab bar.
- **Hero:** headline serif maroon + kartu statistik (`INDEKS TERVERIFIKASI`: 140+ / 4.92 / 18k+).
- **Filter bar:** 2 baris — kategori (pill maroon) + wilayah (pill gold).
- **Grid vendor:** 3 kolom, 6 kartu (badge Verified Partner, rating, kategori, status pill, harga).
- **Testimoni:** carousel 2 kartu ("Cerita Pengantin & Kenangan Bersama Tamu").
- **CTA banner maroon:** "Apakah Anda Vendor Souvenir / F&B Pernikahan?" + tombol emas.
- **Footer:** brand + 2 kolom link + legal bar.

## 4. Instruksi untuk Blay (Dev)
1. Baca `design/DESKTOP_DESIGN_STANDARD.md` (spec final).
2. Implement halaman desktop mengikuti spec; pakai gambar referensi sbg acuan visual.
3. Palet: maroon `#6B263D`, gold `#F2CC54`, blush `#FEF0F3`, surface `#FFFFFF`.
4. Grid vendor 3 kolom; hero 2 kolom; banner CTA full-width maroon.
5. Konfirmasi label final (lihat bagian "Known Transcription Uncertainties") — struktur & palet sudah final.
6. Publish ke `http://192.168.1.227:3000/` → lapor ke Nyet → Vangke QA → Daus review.

## 5. Catatan
- Beberapa microcopy low-confidence (lihat spec §9) — konfirmasi saat implementasi.
- Spec desktop ini **menggantikan** pendekatan mobile-first untuk breakpoint desktop.

---
*Njing — UI/UX & Product Manager*
