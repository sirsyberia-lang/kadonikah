export interface Souvenir {
  id: string;
  name: string;
  price: number;
  category: 'budget-fit' | 'hemat' | 'eksklusif';
  image: string;
  link: string;
  description: string;
}

export const souvenirs: Souvenir[] = [
  {
    id: '4',
    name: 'Tea Strainer Emas Elegan',
    price: 7500,
    category: 'hemat',
    image: '/images/souvenirs/original/4-tea-strainer.jpg',
    link: '#',
    description: 'Saringan teh stainless steel anti karat warna emas gold lengkap dengan gantungan liontin.'
  },
  {
    id: '3',
    name: 'Scented Candle Botanical',
    price: 8000,
    category: 'hemat',
    image: '/images/souvenirs/original/3-scented-candle.jpg',
    link: '#',
    description: 'Lilin kedelai wangi lavender dan vanilla dalam kaleng aluminium bergaya vintage.'
  },
  {
    id: '5',
    name: 'Linen Pouch Serbaguna',
    price: 9500,
    category: 'budget-fit',
    image: '/images/souvenirs/original/5-linen-pouch.jpg',
    link: '#',
    description: 'Pouch kain blacu katun premium dengan sablon inisial pengantin monogram minimalis.'
  },
  {
    id: '6',
    name: 'Artisan Soap Bar Alami',
    price: 10000,
    category: 'budget-fit',
    image: '/images/souvenirs/original/6-artisan-soap.jpg',
    link: '#',
    description: 'Sabun batang herbal minyak kelapa dan oatmeal dengan aroma relaksasi bunga melati.'
  },
  {
    id: '1',
    name: 'Reed Diffuser Aromaterapi',
    price: 25000,
    category: 'eksklusif',
    image: '/images/souvenirs/original/1-reed-diffuser.jpg',
    link: '#',
    description: 'Botol kaca estetik 30ml lengkap dengan stick rotan dan box kartu ucapan kustom.'
  },
  {
    id: '2',
    name: 'Cutlery Set Kayu Aesthetic',
    price: 30000,
    category: 'eksklusif',
    image: '/images/souvenirs/original/2-cutlery-set.jpg',
    link: '#',
    description: 'Sendok, garpu, dan sumpit kayu jati natural dipadukan pouch kanvas tali rami.'
  },
  // --- Crawler-harvested souvenirs (Tokopedia) — Phase-1 hybrid: web_search + web_extract ---
  {
    id: '100',
    name: 'Handuk Terry Palmer Luxury - Royale (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/100-handuk-terry-palmer---royale.svg',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-royale-handuk-couple-set',
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 7rb+ terjual'
  },
  {
    id: '101',
    name: 'Handuk Terry Palmer Luxury - Goldline (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/101-handuk-terry-palmer---goldline.svg',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-goldline',
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 250+ terjual'
  },
  {
    id: '102',
    name: 'HAMPERS GIFTBOX POTTON SCARF & A5 ALQURAN CUSTOM NAMA',
    price: 149900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/102-hampers-giftbox-potton-scarf.svg',
    link: 'https://www.tokopedia.com/find/hampers-giftbox-potton-scarf',
    description: 'Gift Box pernikahan / ulang tahun / wisuda, custom nama. Rating 5.0 • 17 terjual'
  },
  {
    id: '103',
    name: '(Caira) PAKET 50PCS Souvenir Pernikahan Cardholder 3 Slot Aesthetic Wave Ombak',
    price: 123000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/103-cardholder-3-slot-aesthetic.svg',
    link: 'https://www.tokopedia.com/caira/cardholder-3-slot-aesthetic-wave',
    description: 'Aesthetic souvenir cardholder, isi 50 pcs. Rating 5.0 • 60+ terjual'
  },
  {
    id: '104',
    name: 'Al Quran Custom Nama Motif Oscar Ukuran A5 Plus',
    price: 148000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/104-al-quran-custom-nama-oscar.svg',
    link: 'https://www.tokopedia.com/al-mubarok-official/al-quran-custom-nama-motif-oscar-a5',
    description: 'Al Quran custom nama, pouch + tasbih mutiara. Rating 5.0 • 13 terjual'
  },
  {
    id: '105',
    name: 'Capricorn Homeliving Hampers Mug Suvenir Pernikahan',
    price: 97800,
    category: 'hemat',
    image: '/images/souvenirs/crawled/105-hampers-mug-suvenir.svg',
    link: 'https://www.tokopedia.com/capricorndesign/mug-souvenir-pernikahan',
    description: 'Mug souvenir pernikahan / bridal shower, isi 1. Rating 5.0 • 100+ terjual'
  },
  {
    id: '106',
    name: '(BISA COD) Tempat Tisu Bentuk Kerang / Kotak Tisu Mini Pouch',
    price: 39000,
    category: 'hemat',
    image: '/images/souvenirs/crawled/106-tempat-tisu-bentuk-kerang.svg',
    link: 'https://www.tokopedia.com/futureupin/tempat-tisu-bentuk-kerang',
    description: 'Tempat tisu serbaguna souvenir pernikahan. Rating 5.0 • 8 terjual'
  },
  {
    id: '107',
    name: 'Leolle Bali Patung Janger Bali 10cm',
    price: 90000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/107-patung-janger-bali-10cm.svg',
    link: 'https://www.tokopedia.com/leollebali/patung-janger-bali-10cm',
    description: 'Kado pernikahan hadiah wedding patung penari bali, gift box etnik klasik. Rating 5.0 • 70+ terjual'
  },
  {
    id: '108',
    name: 'Note book custom (A6) / Souvenir Note Book Pernikahan murah',
    price: 2500,
    category: 'hemat',
    image: '/images/souvenirs/crawled/108-note-book-custom-a6.svg',
    link: 'https://www.tokopedia.com/snadaprinting/note-book-custom-a6',
    description: 'Note custom A6, souvenir murah cepat, bisa COD. Rating 5.0 • 2rb+ terjual'
  },
  {
    id: '109',
    name: 'BINSA - Piring Sambal Stainless Mini Piring Kecil Kecap',
    price: 5875,
    category: 'hemat',
    image: '/images/souvenirs/crawled/109-piring-sambal-stainless.svg',
    link: 'https://www.tokopedia.com/binsakitchenware/piring-sambal-stainless-mini',
    description: 'Piring sambal stainless, souvenir pernikahan TW03. Rating 5.0 • 250+ terjual'
  },
  {
    id: '110',
    name: '(Caira) dompet souvenir pernikahan / dompet kartu card holder aesthetic',
    price: 1956,
    category: 'hemat',
    image: '/images/souvenirs/crawled/110-dompet-souvenir-card-holder.svg',
    link: 'https://www.tokopedia.com/caira/dompet-souvenir-pernikahan-card-holder',
    description: 'Dompet souvenir pernikahan aesthetic, card holder. Rating 5.0 • 100+ terjual'
  },
  {
    id: '111',
    name: 'Leolle Bali Lilin Aromaterapi Scented Candle Set of 4pcs',
    price: 171000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/111-lilin-aromaterapi-4pcs.svg',
    link: 'https://www.tokopedia.com/leollebali/lilin-aromaterapi-scented-candle-4pcs',
    description: 'Lilin aromaterapi wangi, gift box eksklusif, home decor aesthetic. Rating 5.0 • 250+ terjual'
  }
];
