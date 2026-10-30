# 🎨 DESKTOP V2 — "ASOY EDITORIAL SAMPLING" (kadonikah.id)

> **Ditetapkan:** 26 Oktober 2026, 10:28 WIB  
> **Status:** APPROVED by Kak Daus  
> **Referensi HTML Sampling:**
5|> - `kalkulator_rekomendasi_souvenir_pernikahan.html` (Legacy Desktop)
6|> - `reference-desktop-kalkulator-v2.html` (Interactive Desktop - UPDATED 2026-10-28)
7|> - `inspirasi_vendor_mobile.html`
8|> - `inspirasi_vendor_rekanan_souvenir_pernikahan.html`
9|> - `kalkulator_budget_coffee_bar_aktif_pilihan_paket.html` (Legacy Coffee Bar)
10|> - `reference-mobile-kalkulator.html` (Mobile Calculator)
11|> - `reference-mobile-coffeebar.html` (Mobile Coffee Bar)
12|> - `reference-coffeebar-landing.html` (Desktop Coffee Bar Landing)

---

## 1. VIBE & DESIGN PHILOSOPHY

**URL Namespace Note (2026-10-28):**
- V2 project dipisah di URL `/v2/*` (misal: `/v2/index`, `/v2/coffeebar`, `/v2/catalog`, `/v2/vendor`).
- Project pertama di `/` tetap utuh & tidak di-overwrite!

**Keyword:** Premium Editorial Magazine, Warm Champagne, Trust-Driven.

- **Not Girly-Pink anymore** → Champagne Gold + Rose Gold + Sage Green.
- **Editorial Layout** → Magazine-style header pills, badge kurasi.
- **Glassmorphism** → Header sticky `backdrop-blur-xl`, soft shadows.
- **Premium Cards** → Large photo covers, floating status badges, hover scale-up.

---

## 2. NEW COLOR PALETTE (Token System)

### 2.1 Main Colors
| Token | Hex | Usage |
|---|---|---|
| `champagne.500` | `#B88E5B` | Accents, icons, secondary text |
| `champagne.100` | `#F5EFE6` | Light background sections |
| `roseGold.500` | `#DC4456` | Primary CTA, unit allocation display, active highlights |
| `roseGold.100` | `#FDE8E9` | Result card background (gradient) |
| `sage.600` | `#476A56` | Success badges, "Hemat" status, consultation banners |
| `sage.100` | `#E5EDE7` | Success banner background |
| `stone.900` | `#201A1C` | Headers, primary buttons, strong text |
| `stone.50` | `#FAF8F5` | Main body background (warm ivory) |

### 2.2 Semantic Usage
- **Unit Allocation (Big Number):** Rose Gold `#DC4456`, bold serif.
- **Coffee Bar Active:** Amber border `#F59E0B`, amber background.
- **Vendor Badge "Verified Partner":** Secondary gold pill.
- **Budget Breakdown:** Stone text + Amber highlight for Coffee Bar cost.

---

## 3. TYPOGRAPHY SYSTEM

| Element | Font Family | Size | Weight | Usage |
|---|---|---|---|---|
| **Display H1** | Playfair Display (Serif) | 48px → 36px mobile | 700 | Hero headlines |
| **Headline H2** | Playfair Display | 32px → 26px mobile | 600 | Section titles |
| **Calculator Number** | Plus Jakarta Sans | 28px | 700 | Unit Allocation display |
| **Body Text** | Plus Jakarta Sans | 14px | 400 | Paragraphs, descriptions |
| **Label/Badge** | Plus Jakarta Sans | 11px | 600 | Uppercase, wide tracking |

---

## 4. LAYOUT COMPONENTS (Desktop ≥1280px)

### 4.1 Sticky Header
- **Height:** `h-20` (80px).
- **Style:** `bg-white/90 backdrop-blur-md`, shadow-sm.
- **Logo:** Sparkle icon (`lucide` → `sparkles`) in rose gold circle + Wordmark "Souvenir Murah" (serif bold) + Tagline "WEDDING PLANNER & CALCULATOR" (11px uppercase champagne).
- **Nav Links:** Kalkulator Budget · Katalog Rekomendasi · Wedding Coffee Bar · Inspirasi Vendor.
- **Right:** "Masuk / Daftar" button (stone-900 solid).

### 4.2 Hero Banner
- **Background:** Gradient champagne-100 → transparent.
- **Badge:** Rose gold pill "⚡ Perencana Anggaran Pernikahan Praktis".
- **H1:** Playfair Display 48px, stone-900.
- **Paragraph:** 18px stone-600.

### 4.3 Calculator Panel (Left Column, Sticky)
- **Width:** `lg:col-span-5` (5/12 grid).
- **Style:** White card, rounded-3xl, shadow-xl.
- **Header:** Sliders icon + "Kalkulator Anggaran" + badge "Otomatis Terkalkulasi" (sage).
- **Inputs:**
  - **Base Budget Souvenir:** Text input with "Rp" prefix, format ribuan.
  - **Total Tamu Undangan:** Number input, users icon.
  - **Coffee Bar Addon (checkbox):** Amber border when active.
    - **NEW FEATURE:** Radio buttons untuk pilih paket:
      - ☕ Paket Petite (200 Cups) — Rp 1.500.000
      - ☕ Paket Medium (350 Cups) — Rp 2.500.000
      - ☕ Paket Grande (500 Cups) — Rp 3.500.000
- **Action Buttons:** "Salin Link" (stone-900) + "Share WA" (WhatsApp green `#25D366`).
- **Result Card (Rose Gold Gradient):**
  - **Top:** "Alokasi Per Unit" label + Big number (Rose Gold, 36px bold).
  - **Badge below number:** "Total Keseluruhan + Coffee Bar: Rp 13.000 / undangan" (amber pill).
  - **Breakdown:**
    - Souvenir Base: Rp 5.000.000
    - Coffee Bar Cost: Rp 1.500.000 (amber badge)
    - **Total Estimasi:** Rp 6.500.000 (rose gold bold).

### 4.4 Product Grid (Right Column)
- **Width:** `lg:col-span-7` (7/12 grid).
- **Header:** "Rekomendasi Souvenir" + filter tabs (Semua, Sesuai Budget, Hemat, Eksklusif).
- **Cards:** 2 columns (`sm:grid-cols-2`), rounded-3xl, hover shadow-md + scale-105 image.
- **Card Anatomy:**
  - Photo (h-44, rounded-2xl).
  - Price badge (top-right, rose gold pill).
  - Title (serif bold).
  - Description (12px stone-500, line-clamp-2).
  - **Dynamic Badge:**
    - ⚠️ NAMBAH Rp X (amber) jika harga > alokasi.
    - ✅ HEMAT Rp X (emerald) jika harga < alokasi.
    - ✨ PAS SESUAI BUDGET (blue) jika harga = alokasi.
  - Button: "Cek Vendor" (hover rose gold).

### 4.5 Vendor Directory Page (Desktop)
- **Editorial Header Band:**
  - Badge: "Kurasi Edisi 2025" (secondary-container).
  - H1: Playfair Display 48px "Inspirasi Vendor Souvenir & Rekanan Kreatif Pernikahan".
  - **Stats Bento Box (right):** 3 tiles → "140+ Atelier Kriya", "4.92 Rata-rata Skor", "18k+ Tamu Terkesan".
- **Filter Tabs (Sticky):** Semua Vendor · Souvenir Kreatif · Packaging & Kartu · Coffee Bar · Mahar & Seserahan.
- **Wilayah Pills:** Seluruh Indonesia (active gold) · Jabodetabek · Bandung · Surabaya · Yogyakarta · Bali.
- **Vendor Cards (3 cols):**
  - Photo cover (h-64, hover scale-105).
  - Badges overlay: "Verified Partner" + "Min. 100 pcs".
  - Rating (bottom-left): ⭐ 4.9 (1.2k+ Ulasan).
  - Lokasi tag (bottom-right).
  - Card body: Category label + vendor name (serif bold) + description.
  - Price card (bottom): "Mulai Dari Rp 16.500 / pcs".
  - Buttons: "Portofolio" (gray) + "Chat Vendor" (rose gold).

### 4.6 Testimonial Section (Editorial Stories)
- **Background:** Surface-container-low + subtle glow blur.
- **Cards (2 cols):** Large padding, couple photo (rounded-full 64px) + name + venue + quote (italic serif large) + souvenir spotlight card (product thumbnail + total biaya).
- **Examples:**
  - Radit & Bella (650 undangan) → Botanical Candle → Rp 10.7 Jt.
  - Dimas & Anissa (1.200 undangan) → Cutlery Jati + Coffee Bar → Rp 19.8 Jt.

### 4.7 CTA Banner (Vendor Partnership)
- **Style:** Rose gold primary gradient background, rounded-3xl, shadow-xl.
- **Badge:** "Kemitraan Eksklusif Pengrajin" (secondary gold).
- **H2:** Playfair Display white "Apakah Anda Vendor Souvenir / F&B Pernikahan?".
- **Feature Pills:** ✓ Badge Terverifikasi · ✓ Direct Chat WhatsApp · ✓ Fitur Simulasi Anggaran.
- **Buttons:** "Daftar Jadi Rekanan Sekarang" (secondary gold solid) + "Konsultasi Tim Kurasi" (outlined).

### 4.8 Footer (Dark)
- **Background:** Stone-900, text stone-300.
- **Sections:** Brand block + 2 kolom link (Perencanaan & Estimasi, Bantuan & Panduan).
- **Legal bar:** Copyright + tagline.

---

## 5. MOBILE VERSION (< 768px)

> **Referensi:** `reference-mobile-kalkulator.html` + `inspirasi_vendor_mobile.html`

### 5.1 Mobile Kalkulator
- **Tokens:** Same Material 3 palette (`primary: #712342`, `secondary: #735c00`).
- **Layout:** Single column, `px-4`, `pb-24` (safe-area for bottom nav).
- **Header:** Sticky glassmorphism (`bg-surface/85 backdrop-blur-xl`), compact height (64px).
- **Hero:** Badge "⚡ Perencana Anggaran Pernikahan Praktis" + H1 serif.
- **Calculator Form:**
  - Budget input: `Rp`-prefixed, `text-calculator-num-md`.
  - Guest count: **slider** + number input (`range` `#712342 accent`).
  - **Coffee Bar Toggle:** Switch with "Trending" label.
  - **Coffee Bar Packages (active toggle):** Grid 3-col radio pills:
    - **Petite** (200 Cups) — +Rp 1.500.000
    - **Medium** (400 Cups) — +Rp 2.800.000
    - **Grande** (700 Cups) — +Rp 4.500.000
  - *NOTE:* Mobile package sizes DIFFER from desktop (mobile: 200/400/700 vs desktop 200/350/500).
- **Action Buttons:** "Salin Link" + "Share WA" (green `#25D366`) — grid 2-col.
- **Cost Summary Card:** Gradient `primary → primary-container`, large unit price display, itemized breakdown (souvenir base, coffee cost, grand total).
- **Rekomendasi Souvenir Grid:** Horizontal scroll pills (Semua, Sesuai Budget, Hemat, Eksklusif) + product card stack (horizontal image + info).
- **Foldable Sketch Reference:** Collapsible "Lihat Sketsa Awal Kalkulator" section.

### 5.2 Bottom Tab Navigation (Mobile)
- Fixed bottom bar, `bg-surface/90 backdrop-blur-xl`.
- 4 tabs: Kalkulator (active), Katalog, Coffee Bar, Vendor.
- Icon: Material Symbols (`calculate`, `featured_seasonal_and_gifts`, `coffee`, `storefront`).
- Active tab: `text-primary font-semibold`.

### 5.3 Mobile Coffee Bar Dedicated Page

> **Referensi:** `reference-mobile-coffeebar.html`

**Layout:** Standalone `/coffee-bar` route (bottom nav tab 3).

**Sections:**
1. **Hero Mobile Showcase:**
   - Full-width hero image (272px height) gradient overlay.
   - Badge: "Live Brewing Experience" + "Official Partner".
   - H1: "Hadirkan Kehangatan Kafe Spesial di Resepsi Anda".
   - Trust badges grid 3-col: "150+ Resepsi Sukses" / "30 Detik Penyajian" / "100% Specialty Arabika".

2. **Interactive Quick Calculator Helper:**
   - Guest range slider (100–2000 tamu).
   - Auto-recommend cups (58% consumption ratio).
   - Suggest ideal package: Petite (<= 220), Medium (<= 380), Grande (<= 600), Custom (> 600).

3. **Vertical Stacked Pricing Cards (3 packages):**
   - **Petite:** 200 Cups — Rp 1.500.000 (Rp 7.500/cup) — 1 Barista (3 Jam), 2 Menu, Custom Sleeve, Portable Mini Cart.
   - **Medium (Paling Populer):** 350 Cups — Rp 2.500.000 (Rp 7.140/cup) — 2 Barista (4 Jam), 4 Menu, Full Custom Menu Card, 3 Desain Booth + **Bonus 20 Cup Artisan Mocktail VIP Table**.
   - **Grande:** 500 Cups — Rp 3.500.000 (Rp 7.000/cup) — 3 Barista (5 Jam), Semua Menu, Dual Espresso Machines, Free Latte Art Station.
   - **Custom Bespoke:** >1.000 Cups, Mocktail Bar, Custom Beans Origin — "Tanya Quote".

4. **Booth Themes Horizontal Scroll:**
   - 3 themes: Rustic Solid Teak (Nuansa Alam), Minimalist White Marble (Modern Glam), Vintage Brass & Dark Oak (Classic Heritage).
   - Cards: 240px width, 144px image, title + description.

5. **Signature Drinks Grid (2-col):**
   - Aren Creamy Latte (Best Seller), Salted Caramel Macchiato, Lychee Rose Cold Brew, Peach Blossom Tea (Non-Coffee).

6. **Mobile Accordion FAQ:**
   - 4 collapsible items: Daya listrik, Durasi standby barista, Tahapan booking, Taster test.

7. **Booking CTA Form Card:**
   - Inputs: Nama calon pengantin/PIC, Tanggal resepsi, Kota venue (dropdown 6 cities), Pilihan paket (readonly pre-filled), WhatsApp (+62 prefix).
   - Submit: "Cek Slot Tanggal via WhatsApp" → success toast.

**Note:** Package sizes/prices on Coffee Bar dedicated page MATCH mobile kalkulator (Petite 200, Medium 350, Grande 500) — consistent across mobile UX.

## 6. DEDICATED WEDDING COFFEE BAR PAGE (`/coffee-bar`)

> **Referensi Desktop:** `reference-coffeebar-landing.html`
> **Referensi Mobile:** `reference-mobile-coffeebar.html`

### 6.1 Layout & Navigation
- Route: `/coffee-bar` (dapat diakses via top nav & bottom tab).
- Color tokens: Material 3 (`#712342 primary`, `#735c00 secondary`, `#fff8f8 background`).

### 6.2 Page Sections (Desktop & Mobile Responsive)
1. **Top Hero Visual Showcase:**
   - H1: "Hadirkan Kehangatan Kafe Spesial di Resepsi Pernikahan Anda."
   - Subtitle + Badges ("Live Brewing Experience · Hospitality Nusantara").
   - CTA Buttons: "Konsultasi Menu & Jadwal" + "Hitung Kebutuhan Cups".
   - Trust mini badges: "150+ Pernikahan Terlayani", "30 Detik Kecepatan Saji", "100% Organik / Specialty".
   - Asymmetric photo mosaic dengan floating badge "Custom Monogram Stamp".

2. **Interactive Cup Calculator Anchor:**
   - Quick input total tamu (default 500 orang).
   - Auto-calculate recommended cups (60-70% ratio, e.g. 500 tamu → 350 cups).
   - Direct button "Lihat Paket Sesuai".

3. **Pilihan Paket Coffee Bar (4 Cards):**
   - **Paket Petite:** Rp 1.500.000 / 200 Cups (Rp 7.500/cup) — Intimate wedding, 2 baristas, 4 jam standby.
   - **Paket Medium (Paling Populer):** Rp 2.500.000 / 350 Cups (Rp 7.140/cup) — Resepsi 400-600 pax, 3 baristas, 2 mocktails, artisan tea + 50 finger pastry, custom neon sign, 5 jam standby.
   - **Paket Grande:** Rp 3.500.000 / 500 Cups (Rp 7.000/cup) — Ballroom, 4 baristas + runner, gelato affogato corner (100 porsi), 6 jam standby.
   - **Custom Open Bar:** Bespoke quote (mulai Rp 6.500/cup) — >700 cups, multi-location, custom syrup.

4. **Koleksi Visual Booth & Signature Drink Menu:**
   - **3 Booth Themes:** Rustic Solid Teak (Outdoor/Garden), Clean Minimalist White Marble (Modern Glasshouse), Vintage Brass & Dark Oak (Luxury Ballroom).
   - **4 Signature Drinks:** Aren Creamy Latte, Salted Caramel Macchiato, Lychee Rose Cold Brew, Peach Blossom Tea.

5. **Value Props (Bento Grid 4-col):**
   - Barista Bersertifikasi, Dual Boiler Cepat Saji, 100% Arabika Specialty, Compostable Cups.

6. **FAQ Accordion (4 items):**
   - Watt kebutuhan listrik (2.200W - 3.500W).
   - Durasi standby barista (4-6 jam, hadir H-2 jam).
   - Kapan booking ideal (H-30 s/d H-60).
   - Tester & Coffee Tasting Session.

7. **Reservation & Booking Form:**
   - Nama pengantin/planner, Tanggal resepsi, Dropdown pilihan paket, Nomor WhatsApp, Lokasi gedung/kota.
   - Submit: "Cek Tanggal & Dapatkan Proposal" → WhatsApp redirect or confirmation modal.

- **Bottom Tab Navigation:** 4 tabs (Kalkulator, Katalog, Coffee Bar, Vendor) — active tab primary color.
- **Header:** Compact 64px, logo + help icon + profile icon.
- **Cards:** Single column, stack vertical.
- **Coffee Bar Addon:** Expand accordion untuk package selection.

---

## 6. INTERACTIVE BEHAVIORS

### 6.1 Calculator Logic (JavaScript)
```javascript
// Dynamic calculation
function updateCalculator() {
  const baseBudget = parseRupiahInput(budgetInput.value);
  const guests = parseInt(guestsInput.value) || 1;
  const isCoffeeSelected = coffeeBarToggle.checked;
  
  // Get selected coffee package price
  const selectedPkg = document.querySelector('input[name="coffee-pkg"]:checked');
  const coffeeCost = isCoffeeSelected && selectedPkg 
    ? parseInt(selectedPkg.dataset.price || 1500000) 
    : 0;
  
  const totalEstimated = baseBudget + coffeeCost;
  const allocationPerUnit = Math.floor(baseBudget / guests);
  
  // Update DOM
  unitAllocationDisplay.innerText = formatRupiah(allocationPerUnit);
  coffeeBarSummary.innerText = formatRupiah(coffeeCost);
  totalEstimationSummary.innerText = formatRupiah(totalEstimated);
  
  updateProductBadges(allocationPerUnit);
}
```

### 6.2 Product Badge Update
- Compare `data-price` attribute vs `allocationPerUnit`.
- Update badge text + color class dynamically.

### 6.3 Filter Tabs
- Click tab → toggle active style (stone-900 bg + white text).
- Filter cards by `data-category` attribute.

### 6.4 Modals
- **Share Link Modal:** Copy estimasi URL to clipboard.
- **Marketplace Modal:** Shopee, Tokopedia, TikTok Shop links.
- **Login Modal:** Email + Password, Google Sign-In button.

---

## 7. ASSETS & DEPENDENCIES

- **Tailwind CSS:** CDN `https://cdn.tailwindcss.com`
- **Icons:** Lucide (`https://unpkg.com/lucide@latest`)
- **Fonts:** Google Fonts (Playfair Display + Plus Jakarta Sans)
- **Images:** Google AIDA public URLs (sudah ada di HTML sampling)

---

## 8. IMPLEMENTATION CHECKLIST FOR BLAY

- [ ] Setup Tailwind config dengan custom color tokens (champagne, roseGold, sage).
- [ ] Import Playfair Display + Plus Jakarta Sans fonts.
- [ ] Create reusable components:
  - `<Header />` (sticky nav)
  - `<CalculatorPanel />` (left col + coffee bar package radio)
  - `<ProductCard />` (dynamic badge logic)
  - `<VendorCard />` (vendor directory)
  - `<TestimonialCard />` (editorial stories)
  - `<Footer />` (dark footer)
- [ ] Implement calculator logic dengan package selection.
- [ ] Setup modals (Share, Marketplace, Login).
- [ ] Responsive mobile version (bottom tab nav).
- [ ] Deploy ke staging `http://192.168.1.227:3000/`.
- [ ] Test interaksi: filter tabs, coffee bar toggle, dynamic badges.

---

## 9. QA NOTES FOR VANGKE

- [ ] Calculator accuracy: Base + Coffee Package = Total.
- [ ] Dynamic badge: compare price vs alokasi → correct color + text.
- [ ] Coffee Bar packages: radio selection update total.
- [ ] Filter tabs: kategori filtering works.
- [ ] Hover effects: scale-up images, shadow lift cards.
- [ ] Modal open/close: no scroll lock issues.
- [ ] Mobile: bottom tab navigation active state.
- [ ] Responsive breakpoints: desktop 1280px+, mobile < 768px.

---

## 10. HANDOFF TO NYET (PM)

Njing mau track progress Blay via kanban task `t_1c4a0ec3`. Setelah Blay deploy:
1. Njing QA visual (compare vs HTML sampling).
2. Vangke QA functional (calculator logic, filter, modals).
3. Njing lapor ke Kak Daus via Telegram `telegram:633100122`.

**Timeline target:** Deploy staging 27 Oktober 2026, 12:00 WIB.

---

**EOF — Njing Product & UI/UX, Bapuksz Corp**
