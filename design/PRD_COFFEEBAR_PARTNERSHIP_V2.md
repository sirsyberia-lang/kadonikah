# 📋 PRD — COFFEE BAR PARTNERSHIP V2 (KADONIKAH.ID)

## 📌 OVERVIEW
Transformasi landing page Coffee Bar dari single-vendor (Hannah Sarah) menjadi **Multi-Brand Partnership Platform** (Calf, Janji Jiwa, Kopi Kenangan, Fore, Tanamera, dll.).

- **Target Route:** `/v2/coffeebar`
- **Design Reference:** `design/reference-coffeebar-partnership.html`
- **Design Standard:** Desktop‑first V2 ASOY Token System (lihat `DESKTOP_V2_ASOY_SAMPLING.md` §2). Visual sumber: `mockup-desktop-v2.html`.
  - **Palette:** `champagne.500` `#B88E5B` · `roseGold.500` `#DC4456` · `sage.600` `#476A56` · `stone.900` `#201A1C` · `stone.50` `#FAF8F5`
  - **Fonts:** Playfair Display (serif) + Plus Jakarta Sans (sans)
  - **Layout:** Desktop ≥1280px = `DesktopHeader` + dark `Footer`; Mobile <768px = sticky glass header + bottom tab nav.

---

## 🎯 OBJECTIVES
1. Menampilkan kemitraan eksklusif dengan brand kopi lokal ternama.
2. Menyediakan 4 paket transparan (Petite, Medium, Grande, Custom).
3. Meningkatkan conversion rate booking coffee bar untuk pernikahan.
4. Menjaga konsistensi visual V2 — Coffee Bar memakai tema **champagne/roseGold/sage** (sama seperti homepage + katalog), agak beda dengan kalkulator yang pakai warm‑neutral (kebijakan dua‑tema yang disetujui oleh Kak Daus 26 Okt 2026).

---

## 📱 KEY FEATURES & PAGE STRUCTURE

### 1. Hero Section
- Title: "KadoNikah Coffee Bar — Partner Brand"
- Subtitle: "Hadirkan suasana kafe favorit di resepsi pernikahanmu — kerjasama eksklusif dengan brand kopi lokal terbaik."
- **Background:** Gradient champagne-100 → champagne-50 (sesuai `mockup-desktop-v2.html`)

### 2. Partner Brand Showcase
- Showcase partner resmi dengan icon & badge:
  - 🐮 Calf
  - ☕ Janji Jiwa
  - 🍃 Kopi Kenangan
  - ✨ Fore Coffee
  - 🌿 Tanamera Coffee
- Visual card dengan hover effect dan shadow manis. Badge pakai roseGold-500 #DC4456.

### 3. Pricing Tiers (4 Options)
- **Petite (200 cups) — Rp 1.500.000:**
  - Partner: Calf / Janji Jiwa
  - 1 Barista profesional + Manual brew setup + 1 menu signature
- **Medium (350 cups) — Rp 2.500.000 [FEATURED / MOST POPULAR]:**
  - Partner: Kopi Kenangan / Fore
  - 2 Barista profesional + Espresso machine + 2-3 menu signature
- **Grande (500 cups) — Rp 3.500.000:**
  - Partner: Premium Mix (Custom blend)
  - 3 Barista profesional + Full mobile bar + Unlimited menu
- **Custom Quote:**
  - Pilih brand kopi favorit + Custom menu & setup + Dedicated team

### 4. Interactive Gallery
- Grid photo showcase untuk booth setup, barista, dan menu signature.

### 5. Interactive FAQ Accordion
- Toggle accordion untuk pertanyaan seputar:
  - Request brand kopi tertentu
  - Inklusi bahan baku
  - Durasi service & setup
  - Area cakupan service (Jabodetabek)

### 6. Booking CTA Section
- **Style:** Sage-600 `#476A56` CTA card (consistent with `reference-coffeebar-landing.html` + `mockup-desktop-v2.html`), rounded-3xl, shadow-xl.
- **Badge:** "Kemitraan Eksklusif Pengrajin" (secondary champagne).
- **H2:** Playfair Display white "Siap Live Coffee Bar untuk Resepsi Anda?"
- **Feature Pills:** ✓ Barista Bersertifikasi · ✓ Direct Chat WhatsApp · ✓ Fitur Simulasi Anggaran.
- **Buttons:** "Hubungi Konsultan Sekarang" (roseGold solid) + "Lihat Katalog Lainnya" (outlined).

---

## 🔧 TECHNICAL REQUIREMENTS FOR BLAY (DEV)
- Update `pages/v2/coffeebar.tsx` + add `components/CoffeeBar/CoffeeBarLanding.tsx`
- **Design System:** Tailwind CSS + custom ASOY token (champagne/roseGold/sage/stone). Fonts: `Playfair Display` + `Plus Jakarta Sans`.
- **Layout:** Desktop-first = sticky `DesktopHeader` + dark `Footer` (seperti `DESKTOP_DESIGN_STANDARD.md`). Mobile <768px tetap pakai glass header + bottom tab nav.
- **Nav imports:** `../../components/DesktopHeader`, `../../components/Footer` — **hapus/bottom tab nav batal** untuk desktop order.
- Staging test: `http://192.168.1.227:3000/v2/coffeebar`

---

## 👥 RESPONSIBILITIES & SIGN-OFF
- **PRD / Design:** sarie (`njing-productmanager`)
- **Approved by:** Kak Daus (Boss)
- **Developer:** Blay (`default`)

## 🧪 QA NOTES FOR VANGKE (ditambah update V2)
- [ ] Header/Footer: tampil & konsisten di semua halaman desktop (≥1280px); tidak ada ruang kosong di bawah footer.
- [ ] Palette: semua elemen pakai token ASOY baru (champagne/roseGold/sage/stone), tidak ada warna maroon lama `#712342`.
- [ ] Typography: judul Playfair Display, body Plus Jakarta Sans — font loadable di staging.
- [ ] Coffee Bar calculator: paket radio (Petite/Medium/Grande/Custom) update harga total secara dinamis, konsisten sama mockup.
- [ ] Booking CTA: tombol "Hubungi Konsultan Sekarang" trigger WhatsApp redirect / confirmation modal — tidak error scroll lock.
- [ ] FAQ accordion: open/close + ikon rotasi 45°.
- [ ] Responsive breakpoints: desktop 1280px+, tablet 768–1279px, mobile <768px (glass header + bottom tab nav).
- [ ] Cross‑page nav: semua link header + footer ke `/kalkulator`, `/katalog`, `/coffee-bar`, `/vendor`.
