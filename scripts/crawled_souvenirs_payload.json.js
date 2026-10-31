// Crawler MVP output: souvenir products harvested from Shopee + Tokopedia
// Generated via web_search + web_extract (built-in tools), bypass headless bot protection.
// Insert via /v2/cms "Bulk Import" (client-side Supabase upsert).

const harvested = [
  // --- Tokopedia products ---
  {
    _source: 'tokopedia',
    name: 'Handuk Terry Palmer Luxury - Royale (Handuk Couple Set)',
    price: 319900,
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 7rb+ terjual',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-royale-handuk-couple-set',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'eksklusif'
  },
  {
    _source: 'tokopedia',
    name: 'Handuk Terry Palmer Luxury - Goldline (Handuk Couple Set)',
    price: 319900,
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 250+ terjual',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-goldline',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'eksklusif'
  },
  {
    _source: 'tokopedia',
    name: 'HAMPERS GIFTBOX POTTON SCARF & A5 ALQURAN CUSTOM NAMA',
    price: 149900,
    description: 'Gift Box pernikahan / ulang tahun / wisuda, custom nama. Rating 5.0 • 17 terjual',
    link: 'https://www.tokopedia.com/find/hampers-giftbox-potton-scarf',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'eksklusif'
  },
  {
    _source: 'tokopedia',
    name: '(Caira) PAKET 50PCS Souvenir Pernikahan Cardholder 3 Slot Aesthetic Wave Ombak',
    price: 123000,
    description: 'Aesthetic souvenir cardholder, isi 50 pcs. Rating 5.0 • 60+ terjual',
    link: 'https://www.tokopedia.com/caira/cardholder-3-slot-aesthetic-wave',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'budget-fit'
  },
  {
    _source: 'tokopedia',
    name: 'Al Quran Custom Nama Motif Oscar Ukuran A5 Plus',
    price: 148000,
    description: 'Al Quran custom nama, pouch + tasbih mutiara. Rating 5.0 • 13 terjual',
    link: 'https://www.tokopedia.com/al-mubarok-official/al-quran-custom-nama-motif-oscar-a5',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'budget-fit'
  },
  {
    _source: 'tokopedia',
    name: 'Capricorn Homeliving Hampers Mug Suvenir Pernikahan',
    price: 97800,
    description: 'Mug souvenir pernikahan / bridal shower, isi 1. Rating 5.0 • 100+ terjual',
    link: 'https://www.tokopedia.com/capricorndesign/mug-souvenir-pernikahan',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'hemat'
  },
  {
    _source: 'tokopedia',
    name: '(BISA COD) Tempat Tisu Bentuk Kerang / Kotak Tisu Mini Pouch',
    price: 39000,
    description: 'Tempat tisu serbaguna souvenir pernikahan. Rating 5.0 • 8 terjual',
    link: 'https://www.tokopedia.com/futureupin/tempat-tisu-bentuk-kerang',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'hemat'
  },
  {
    _source: 'tokopedia',
    name: 'Leolle Bali Patung Janger Bali 10cm',
    price: 90000,
    description: 'Kado pernikahan hadiah wedding patung penari bali, gift box etnik klasik. Rating 5.0 • 70+ terjual',
    link: 'https://www.tokopedia.com/leollebali/patung-janger-bali-10cm',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'budget-fit'
  },
  {
    _source: 'tokopedia',
    name: 'Note book custom (A6) / Souvenir Note Book Pernikahan murah',
    price: 2500,
    description: 'Note custom A6, souvenir murah cepat, bisa COD. Rating 5.0 • 2rb+ terjual',
    link: 'https://www.tokopedia.com/snadaprinting/note-book-custom-a6',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'hemat'
  },
  {
    _source: 'tokopedia',
    name: 'BINSA - Piring Sambal Stainless Mini Piring Kecil Kecap',
    price: 5875,
    description: 'Piring sambal stainless, souvenir pernikahan TW03. Rating 5.0 • 250+ terjual',
    link: 'https://www.tokopedia.com/binsakitchenware/piring-sambal-stainless-mini',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'hemat'
  },
  {
    _source: 'tokopedia',
    name: '(Caira) dompet souvenir pernikahan / dompet kartu card holder aesthetic',
    price: 1956,
    description: 'Dompet souvenir pernikahan aesthetic, card holder. Rating 5.0 • 100+ terjual',
    link: 'https://www.tokopedia.com/caira/dompet-souvenir-pernikahan-card-holder',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'hemat'
  },
  {
    _source: 'tokopedia',
    name: 'Leolle Bali Lilin Aromaterapi Scented Candle Set of 4pcs',
    price: 171000,
    description: 'Lilin aromaterapi wangi, gift box eksklusif, home decor aesthetic. Rating 5.0 • 250+ terjual',
    link: 'https://www.tokopedia.com/leollebali/lilin-aromaterapi-scented-candle-4pcs',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    category: 'budget-fit'
  }
];

// Map source URL
const affiliateLink = (item) => {
  if (item._source === 'tokopedia') {
    return item.link;
  }
  return item.link || '#';
};

// Build final payload matching Supabase souvenirs schema
const finalPayload = harvested.map((item, idx) => ({
  id: String(100 + idx),
  name: item.name,
  price: item.price,
  category: item.category,
  image: item.image,
  link: affiliateLink(item),
  description: item.description
}));

console.log("=== HARRVETED PAYLOAD ===\n");
console.log(JSON.stringify(finalPayload, null, 2));
