# 🎨 DESKTOP DESIGN STANDARD — Souvenir Murah (kadonikah.id)

> **STATUS: INI STANDAR RESMI (GOLD STANDARD) UNTUK DESKTOP.**
> Ditetapkan oleh Njing (Product & UI/UX) pada **26 Oktober 2026**.
> Berlaku untuk semua halaman desktop `kadonikah.id` / staging `192.168.1.227:3000`.
> **Menggantikan** pendekatan *mobile-first* (bottom tab bar) untuk breakpoint desktop.
> Referensi visual: `design/desktop/reference/2026-10-26-desktop-standard.png`

---

## 1. Design Philosophy

| Prinsip | Penjelasan |
|---|---|
| **Desktop-first** | Layout dirancang untuk lebar ≥ 1280px. Navigasi berupa **header + footer**, bukan bottom tab bar. |
| **Curated, not crowded** | Semua konten "terkurasi" — grid 3 kolom, bukan daftar panjang. |
| **Trust-driven** | Badge `Verified Partner`, rating bintang, statistik, dan testimoni membangun kepercayaan. |
| **Premium warm** | Palet blush pink + maroon + gold; tipografi serif untuk headline, sans untuk body. |
| **Conversion jelas** | Setiap section punya satu CTA utama; banner maroon di penutup halaman. |

---

## 2. Color System (dari sampling piksel referensi)

| Token | Hex | Penggunaan |
|---|---|---|
| `bg.blush` | `#FEF0F3` | Background halaman utama (blush pink) |
| `bg.blush.alt` | `#F7EAEC` / `#FFF8F8` / `#FDF1F3` | Variasi background section |
| `surface.card` | `#FFFFFF` | Semua kartu (vendor, testimoni, stats) |
| `brand.maroon` | `#6B263D` | **Aksen utama**: banner CTA, pill aktif, heading section, harga, teks badge, tombol primer |
| `accent.gold` | `#F2CC54` | Pill eyebrow, pill wilayah aktif, bintang rating, tombol emas, ikon centang |
| `accent.olive` | `#899557` | Garis/dash eyebrow *(low confidence)* |
| `text.hero` | `#6E5745` | Headline serif hero (hangat, kecoklatan) |
| `text.body` | `#957A6E` | Body text abu hangat |
| `text.strong` | `#3E3B38` | Teks near-black |
| `border.muted` | `#DCCFC5` / `#E5D9D9` | Border kartu, placeholder gambar, pemisah |
| `overlay.light` | `#FFF4F6` / `#FFF1F5` | Warna teks ringan di atas banner maroon |

**Catatan implementasi:** maroon `#6B263D` ≈ `rose-900` custom; gold `#F2CC54` ≈ `amber-300/400`. Pakai CSS variables / Tailwind theme extension.

---

## 3. Typography

| Elemen | Style |
|---|---|
| **Display / H1 (hero & section heading)** | **Serif** (contoh: Playfair Display / Fraunces), `font-weight: 700–800`, tracking sedikit negatif, warna maroon |
| **Body / UI** | **Sans** (contoh: Inter / Plus Jakarta Sans), `font-weight: 400–600`, warna `#957A6E` |
| **Label / eyebrow** | Sans, `uppercase`, `letter-spacing: 0.15em`, `font-size: 11–12px`, warna abu |
| **Harga** | Sans, `font-weight: 700–900`, warna maroon |
| **Nav link** | Sans, `font-size: 14px`, warna `#3E3B38`, hover → maroon |

---

## 4. Layout & Grid

- **Container:** max-width `1280px`, `margin: 0 auto`, padding horizontal `24px` (desktop).
- **Hero:** 2 kolom — kiri teks (headline + paragraf + CTA), kanan kartu statistik (`INDEKS TERVERIFIKASI`).
- **Filter bar:** 2 baris — kategori (maroon pills) + wilayah (gold pills), label `WILAYAH` di kiri, indikator jumlah/sortir di kanan.
- **Grid vendor:** **3 kolom** (`grid-cols-3`), gap `24px`.
- **Testimoni:** carousel 2 kartu per view, panah prev/next di kanan atas.
- **CTA banner:** full-width rounded rectangle maroon, 2 zona (teks kiri, tombol kanan).
- **Footer:** 3 zona — brand block + 2 kolom link + legal bar.

---

## 5. Page Structure (top → bottom)

1. **Header** (sticky)
2. **Subheader bar** (pill kurasi + tagline)
3. **Hero** (headline serif + paragraf + kartu statistik)
4. **Filter bar** (kategori + wilayah)
5. **Vendor grid** — "Atelier & Vendor Terpopuler Bulan Ini"
6. **Testimoni** — "Cerita Pengantin & Kenangan Bersama Tamu" (carousel)
7. **CTA banner maroon** — "Apakah Anda Vendor Souvenir / F&B Pernikahan?"
8. **Footer** (brand + 2 kolom link + legal bar)

---

## 6. Component Specs

### 6.1 Header
- **Kiri:** logo badge maroon rounded-square (ikon gift putih) + wordmark **"Souvenir Murah"** (bold) + tagline kecil gold uppercase **"WEDDING PLANNER & CALCULATOR"**.
- **Tengah (nav):** `Kalkulator Budget` · `Katalog Rekomendasi` · `Wedding Coffee Bar` — teks `#3E3B38`, hover maroon.
- **Tombol primer:** pill maroon solid **"Inspirasi Vendor"** (teks putih).
- **Kanan:** teks **"Masuk / Daftar"** + ikon profil bulat maroon.

### 6.2 Subheader bar
- Pill gold kecil **"KURASI EDISI 2025"**.
- Teks **"Direktori rekanan pengrajin pernikahan"**.
- Kanan: **"100% Portofolio Terkurasi & Transparan"**.

### 6.3 Hero
- Eyebrow gold kecil: **"Luxe Registry & Vendor Index"**.
- **H1 serif maroon:** "Inspirasi Vendor Souvenir & Rekanan Kreatif Pernikahan."
- Paragraf abu: "Temukan pengrajin terbaik, studio kemasan kustom, dan vendor wedding terverifikasi… melekat di ingatan tamu undangan."
- **Kartu kanan** (`INDEKS TERVERIFIKASI`, putih, rounded, shadow lembut) berisi 3 tile statistik:
  - **140+** — Vendor Aktif
  - **4.92** — Rating Rata-rata (dengan label "Rata-rata Ulasan")
  - **18k+** — Tamu Terlayani

### 6.4 Filter bar
- **Baris kategori:** pill aktif maroon **"Semua Vendor"**, lalu pill putih: `Souvenir Kreatif` · `Packaging & Kartu Ucapan` · `Vendor Coffee Bar` · `Mahar & Seserahan` · (1 pill lagi terpotong). Kanan: **"Menampilkan 6 Pilihan Terbaik"**.
- **Baris wilayah:** label `WILAYAH`, pill aktif gold **"Seluruh Indonesia"**, lalu pill putih: `Jabodetabek` · `Bandung` · `Surabaya` · `Yogyakarta` · `Bali`. Kanan: **"Tersortir: Nilai/Ulasan Tertinggi"**.

### 6.5 Kartu Vendor (grid 3 kolom)
Anatomi per kartu:
1. **Badge baris atas:** `Verified Partner` (pill putih + ikon centang) + `Min. 100 pcs` (pill putih).
2. **Rating:** bintang emas + angka (contoh `4.9`) + `(100 Ulasan)`.
3. **Tag lokasi** (abu, kecil).
4. **Kategori** (uppercase, contoh `AROMATERAPI/BOTANICAL`).
5. **Status pill** (beige): `Sampel Ready` / `Food Grade` / `All-in Barista`.
6. **Nama vendor** (serif maroon, besar).
7. **Foto produk** (rounded, bg `#F7EAEC`).
8. **Harga** `Rp xx.xxx` (maroon, bold).

**Data vendor (6 kartu):**
| # | Vendor | Harga | Rating |
|---|---|---|---|
| 1 | Lumiere Scent Atelier | Rp 16.500 | ★ 4.9 |
| 2 | Kriya Kayu ATI | Rp 8.900 | ★ 5.0 |
| 3 | Sora Coffee & Barista Catering | Rp 19.000 | ★ 4.9 |
| 4 | Batik & Bless Canvas Co. | Rp 6.800 | ★ 4.8 |
| 5 | Atelier Tea & Botanica | Rp 12.000 | ★ 4.9 |
| 6 | Kenanga Indah Kartu & Box | Rp 4.500 | ★ 4.8 |

### 6.6 Testimoni (carousel)
- Eyebrow: **"TESTIMONI NYATA PASANGAN BAHAGIA"**
- Heading serif: **"Cerita Pengantin & Kenangan Bersama Tamu"**
- Panah prev/next bulat di kanan atas.
- Anatomi kartu: foto profil bulat (kiri) → nama (heading) → meta (lokasi · tamu) → badge (contoh `Couple Series Party`) → kutipan → `Pilihan Souvenir: …` → `Total Bayar Rp x.x jt` → `Vendor: …` → link **"Baca ulasan lengkapnya >"**.
- Contoh kartu: **Radit & Bella** (Total Bayar Rp 10.7 jt) & **Dimas & Anissa** (1.200 tamu, Total Bayar Rp 19.9 jt).

### 6.7 CTA Banner (maroon) ⭐
- Background: **maroon `#6B263D`** (rounded, shadow halus).
- Kiri atas: pill gold **"PENDAFTARAN EKSKLUSIF PENDEKARAN"** + teks ringan **"Batch Regu awal Q2 2026"**.
- **Headline putih:** "Apakah Anda Vendor Souvenir / F&B Pernikahan?"
- Paragraf ringan: "Gabung jadi rekanan Terverifikasi Souvenir Murah Nusantara, dapatkan akses langsung ke ribuan calon pengantin yang siap memesan setiap bulannya tanpa potongan komisi yang membebani."
- 3 fitur (ikon centang emas): `Badge Terverifikasi` · `Direct Chat WhatsApp` · `Fitur Simulasi Anggaran`.
- Kanan: tombol emas **"Daftar Jadi Rekanan Sekarang"** (ikon dokumen) + tombol sekunder outlined **"Konsultasi Tim Kurasi Rekanan"**.

### 6.8 Footer
- **Brand block:** logo + **"Souvenir Murah"** + paragraf: "Platform khusus dan estimasi anggaran souvenir pernikahan terpercaya bagi calon pengantin di Indonesia. Temukan pilihan cenderamata, live coffee station, dan kalkulasi transparan untuk pesta pernikahan impian Anda." + tombol emas + tombol abu.
- **Kolom 1 — "Perencanaan & Estimasi":** Simulasi Anggaran Souvenir · Live Coffee Bar Wedding · Katalog Rekomendasi · Perbandingan Toko Marketplace.
- **Kolom 2 — "Bantuan & Panduan":** Panduan Ukuran & Kemasan · Daftar Rekanan Vendor · Kebijakan Privasi · Hubungi Layanan Pengantin.
- **Legal bar:** "© 2025 Souvenir Murah Nusantara. Seluruh hak cipta dilindungi undang-undang." + tagline kanan.

---

## 7. Interaction & States
- Nav link hover → maroon + underline tipis.
- Pill hover → border maroon; pill aktif → solid maroon (kategori) / solid gold (wilayah).
- Kartu hover → border maroon, shadow naik, gambar `scale(1.05)`.
- Tombol primer hover → maroon lebih gelap; tombol emas hover → gold lebih terang.
- Semua transisi `200–300ms ease`.

---

## 8. Responsive / Breakpoints
| Breakpoint | Perilaku |
|---|---|
| `≥1280px` (desktop) | Layout penuh: header nav + hero 2 kolom + grid 3 kolom + footer 3 zona. **Standar ini.** |
| `768–1279px` (laptop/tablet landscape) | Hero stack, grid 2 kolom. |
| `<768px` (mobile) | Grid 1–2 kolom, bottom tab bar (mobile) — di luar scope standard desktop ini. |

---

## 9. Known Transcription Uncertainties
Teks dibaca dari screenshot resolusi rendah (528×1600); beberapa label low-confidence:
- Eyebrow subheader: `KURASI EDISI 2025` vs `KURASI PILIHAN REDASI` (kemungkinan dua label berbeda di dua section).
- Nama vendor di testimoni (`Lavamere Scent Atelier`, `Kiryu Kayu`, `Sona Coffee`) agak blur — beda tipis dgn nama di grid.
- Meta testimoni kiri (`Palaran Kandeu, 10 Desember 2024 · 605`) blur.
- Tombol footer abu: `KOLEKSI TERVERIFIKASI` (best-effort).
- Tagline legal bar kanan agak blur.

**Aksi:** Blay konfirmasi label final saat implementasi; struktur & palet sudah final.

---

## 10. File References
- Gambar referensi: `design/desktop/reference/2026-10-26-desktop-standard.png`
- Spec ini: `design/DESKTOP_DESIGN_STANDARD.md`
- Quality standard (ringkas): `DESIGN_QUALITY_STANDARD.md`
- Handoff ke Nyet: `design/HANDOFF-to-NYET-2026-10-26.md`
- Referensi halaman Kalkulator: `design/desktop/reference/2026-10-26-desktop-kalkulator.png`

---

## 11. Halaman Kalkulator — "Hitung Budget Souvenir & Temukan Pilihan Paling Elegan"

> Referensi visual: `design/desktop/reference/2026-10-26-desktop-kalkulator.png`
> Ditetapkan bersama homepage sebagai standar desktop (26 Okt 2026).

### 11.1 Struktur (desktop, 2 kolom)
| Zona | Isi |
|---|---|
| Header | Sama dengan homepage (logo + nav: Kalkulator, Katalog Budget, Wedding Coffee Bar, Vendor, Daftar). |
| Hero | Eyebrow + headline serif **"Hitung Budget Souvenir & Temukan Pilihan Paling Elegan"** + subcopy. |
| **Kiri** — panel **"Kalkulator Anggaran"** | Kartu putih sticky, rounded, shadow halus. |
| **Kanan** — **"Rekomendasi Souvenir"** | Grid kartu produk (2–3 kolom). |
| Footer | **Dark** `#1C1917` — brand + quick features + help links + copyright. |

### 11.2 Anatomi panel "Kalkulator Anggaran" (kiri)
- **Anggaran Souvenir (dasar):** Rp 5.000.000
- **Jumlah Tamu:** 500
- **Kategori (dropdown):** `Wedding Coffee Bar (Catering)`
- **Paket (dropdown):** `Paket Petite (200 Cups)` — Rp 1.500.000
- **Output (computed):**
  - **Alokasi per Unit:** Rp 10.000
  - **Estimasi Total:** Rp 6.500.000
- Tombol aksi (mis. WhatsApp / "Hitung Sekarang") — lihat 11.4.

### 11.3 Grid "Rekomendasi Souvenir" (kanan) — 6 kartu
- **Filter tabs** di atas grid: pill **"Sesuai Budget"** · **"Hemat"** (+ label lain TBD — konfirmasi).
- Setiap kartu: foto produk → nama → harga → tombol **"Cek Vendor"**.
| # | Produk | Harga |
|---|---|---|
| 1 | Reed Diffuser Aromaterapi | Rp 25.000 |
| 2 | Wooden Cutlery Set | Rp 30.000 |
| 3 | Scented Candle Botanical | Rp 8.000 |
| 4 | Gold Tea Strainer | Rp 7.500 |
| 5 | Linen Pouch | Rp 9.500 |
| 6 | Artisan Soap Bar Alami | Rp 10.000 |

### 11.4 Palet halaman ini (sampling piksel)
| Warna | Hex | Pakai |
|---|---|---|
| Base / surface | `#F9F7F2` · `#FAF8F5` | Latar ivory hangat |
| Aksen teks/harga | `#8C6B4A` · `#816649` | Brown-gold untuk label & harga |
| Soft gold | `#F8F0C0` | Badge / highlight lembut |
| WhatsApp CTA | `#20D060` | Tombol WhatsApp |
| Footer | `#1C1917` | Footer gelap |

> ✅ **KEPUTUSAN (26 Okt 2026 — disetujui Daus):** Dua tema ini **sengaja berbeda**, bukan bug.
> - **Homepage** → maroon `#6B263D` + gold `#F2CC54` + blush `#FEF0F3`, footer terang. (`2026-10-26-desktop-standard.png`)
> - **Halaman Kalkulator** → warm neutral + brown-gold + hijau WhatsApp + footer gelap `#1C1917`. (`2026-10-26-desktop-kalkulator.png`)
> **JANGAN** diseragamkan. Blay: ikuti palet masing-masing halaman sesuai referensinya.

---

### 11.5 Banner Konsultasi Kemasan Custom
- Banner sebelum footer: ajakan konsultasi kemasan/packaging custom (detail teks + CTA konfirmasi ke Njing/Daus).

---

### 11.6 Referensi halaman Kalkulator
- **v2 (TERBARU — ada filter tabs + banner konsultasi):** `design/desktop/reference/2026-10-26-desktop-kalkulator-v2.png`
- v1: `design/desktop/reference/2026-10-26-desktop-kalkulator.png`

---

## 12. Halaman Katalog Rekomendasi — "Katalog Pilihan Souvenir Pernikahan Berkesan"

> Referensi visual: `design/desktop/reference/2026-10-26-desktop-katalog.png`

### 12.1 Struktur
| Zona | Isi |
|---|---|
| Header | Sama (nav: Kalkulator, Katalog Budget, Wedding Coffee Bar, Vendor, Daftar). |
| Hero | Headline **"Katalog Pilihan Souvenir Pernikahan Berkesan"** + stats **"1.420+ Vendor di Indonesia"** · **"99.4% Pelayanan Rapi & Sesuai"**. |
| Filter bar | Search + budget filter + **category chips** (mis. `Aromaterapi & Lilin`, `Tekstil & Pouch`). |
| Grid | **"Koleksi Terpopuler Tamu Undangan"** — 8 kartu produk. |
| Section | **"Layanan Custom Kemasan Estetik"** — 4 opsi kemasan. |
| CTA banner | **Dark** — ajak coba kalkulator budget otomatis. |
| Footer | Planning resources. |

### 12.2 Grid "Koleksi Terpopuler Tamu Undangan" — 8 produk
Setiap kartu: foto → nama → harga → tag **"Ready Stock"** → tombol **"Cek Vendor"**.
Contoh produk: Reed Diffuser Mini · Cutlery Set Kayu Jati · Madu Murni 500ml · Sukulen Mini Pot Gerabah (+ 4 lainnya — konfirmasi nama & harga final).

### 12.3 "Layanan Custom Kemasan Estetik"
- 4 opsi kemasan, harga **+Rp 1.200 s/d +Rp 4.500 per piece**.

### 12.4 Palet
- **Sama dengan homepage (tema utama maroon):** maroon `#6B263D` + gold `#F2CC54` + blush `#FEF0F3`.
- Banner CTA + footer pakai **dark**.
- ✅ Konfirmasi: halaman Katalog mengikuti tema **maroon** (bukan tema warm-neutral kalkulator).
