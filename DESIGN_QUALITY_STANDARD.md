# Design Specification: Souvenir Murah — kadonikah.id

> **GOLD STANDARD DESKTOP** sekarang ada di:
> 👉 `design/DESKTOP_DESIGN_STANDARD.md` (+ gambar referensi `design/desktop/reference/2026-10-26-desktop-standard.png`)
> Ditetapkan 26 Oktober 2026 oleh Njing. Dokumen ini ringkasan eksekutif saja.

## 1. Design Overview
- **Desktop-first**, bukan mobile-first: navigasi **header + footer** (bukan bottom tab bar).
- **Curated vendor directory**: hero + statistik + filter + grid 3 kolom + testimoni + banner maroon + footer.
- **Trust-driven**: badge `Verified Partner`, rating bintang, statistik, testimoni.
- **Premium warm palette**: blush pink `#FEF0F3` + maroon `#6B263D` + gold `#F2CC54`.

## 2. Quality Benchmark
- **Visual**: serif display untuk headline, sans untuk body; kontras tinggi; border lembut.
- **Interactivity**: hover/click feedback jelas; transisi 200–300ms.
- **Architecture**: komponen modular (kartu vendor, kartu testimoni, pill, badge).
- **Responsif**: desktop ≥1280px = standar; laptop 2 kolom; mobile 1–2 kolom + bottom tab bar.

## 3. Implementation Workflow (Team Instructions)
- **Nyet (PM/PA)**: Enforce `design/DESKTOP_DESIGN_STANDARD.md` sebagai Gold Standard semua UI desktop.
- **Blay (Dev)**: Implement halaman desktop mengikuti spec di atas. Publish ke `http://192.168.1.227:3000/`.
- **Vangke (QA)**: QA menyeluruh (responsive, link, performa, contrast) sebelum Daus Baus review manual.
- **Njing (UI/UX)**: Pemilik spec; review visual final sebelum rilis.
EOF
