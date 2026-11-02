# BLAY (Dev) — Coffee Bar Partnership V2 Landing Page

**@Blay (Dev)** — Kak Daus minta update halaman Coffee Bar jadi **Multi-Brand Partnership Platform** (Calf, Janji Jiwa, Kopi Kenangan, Fore, Tanamera).

## 📋 Source of Truth
- **PRD:** `design/PRD_COFFEEBAR_PARTNERSHIP_V2.md` (attached — updated 2 Nov 2026 by sarie)
- **Mockup:** `design/mockup-desktop-v2.html` (attached)
- **Design Spec:** `design/DESKTOP_V2_ASOY_SAMPLING.md` (attached)
- **Reference HTML:** `design/reference-coffeebar-partnership.html`

## 🎯 Key Changes (dari PRD update terbaru)

### 1. **Palette — ASOY Token System**
- ❌ Hapus warna lama: Maroon `#712342` / Gold `#735c00` / Blush `#fff8f8`
- ✅ Pakai token baru:
  - `champagne.500` `#B88E5B` (accents, secondary text)
  - `roseGold.500` `#DC4456` (primary CTA, active highlights)
  - `sage.600` `#476A56` (success badges, consultation banners)
  - `stone.900` `#201A1C` (headers, primary buttons)
  - `stone.50` `#FAF8F5` (main background)

### 2. **Typography**
- **Display/Headline:** Playfair Display (serif) — 48px → 36px mobile
- **Body/Labels:** Plus Jakarta Sans (sans) — 14px body, 11px badge

### 3. **Layout & Navigation**
- **Desktop (≥1280px):** Sticky `DesktopHeader` + dark `Footer`
- **Mobile (<768px):** Sticky glass header + bottom tab nav
- **Path imports:** `../../components/DesktopHeader`, `../../components/Footer`
- ⚠️ **JANGAN pakai `BottomNavV2` sebagai primary nav desktop** — hanya untuk mobile

### 4. **Page Sections** (sesuai PRD §5)
1. **Hero Section**
   - Title: "KadoNikah Coffee Bar — Partner Brand"
   - Subtitle: "Hadirkan suasana kafe favorit di resepsi pernikahanmu..."
   - Background: Gradient champagne-100 → champagne-50
   
2. **Partner Brand Showcase**
   - 5 partner cards: 🐮 Calf, ☕ Janji Jiwa, 🍃 Kopi Kenangan, ✨ Fore Coffee, 🌿 Tanamera
   - Badge: roseGold-500 `#DC4456`
   
3. **Pricing Tiers (4 Options)**
   - Petite (200 cups) — Rp 1.500.000
   - Medium (350 cups) — Rp 2.500.000 [FEATURED / MOST POPULAR]
   - Grande (500 cups) — Rp 3.500.000
   - Custom Quote
   
4. **Interactive Gallery** (grid photo showcase)
   
5. **Interactive FAQ Accordion** (4 items + rotasi ikon 45°)
   
6. **Booking CTA Section**
   - **Style:** Sage-600 `#476A56` CTA card (bukan maroon/rose gold gradient)
   - Badge: "Kemitraan Eksklusif Pengrajin" (champagne)
   - H2: "Siap Live Coffee Bar untuk Resepsi Anda?"
   - Buttons: "Hubungi Konsultan Sekarang" (roseGold solid) + "Lihat Katalog Lainnya" (outlined)

## 🛠️ Tech Requirements
- **Route:** `/v2/coffeebar`
- **Framework:** Next.js 16 + Tailwind CSS
- **Fonts:** Import Google Fonts (Playfair Display + Plus Jakarta Sans)
- **Animation:** Framer Motion opsional (FAQ accordion)
- **Deploy:** Staging `http://192.168.1.227:3000/v2/coffeebar`

## ✅ Deliverables
- [ ] Update `pages/v2/coffeebar.tsx` + optional `components/CoffeeBar/CoffeeBarLanding.tsx`
- [ ] Tailwind config — custom ASOY tokens (champagne/roseGold/sage/stone)
- [ ] Implement 6 sections sesuai PRD
- [ ] FAQ accordion logic (open/close + icon rotate)
- [ ] WhatsApp booking integration
- [ ] Responsive: desktop 1280px+, mobile <768px
- [ ] Deploy ke staging + test cross-page nav
- [ ] Tag @sarie (UI/UX) di comment ini setelah deploy → QA visual next

## 📌 Context
- Coffee Bar page memakai tema **champagne/roseGold/sage** (sama seperti homepage + katalog)
- Kalkulator page tetap pakai warm-neutral theme (kebijakan dua-tema disetujui Kak Daus 26 Okt 2026)
- PRD sudah final, semua warna maroon lama diganti ASOY tokens

**Gas implement ya, Blay! 💪☕**
