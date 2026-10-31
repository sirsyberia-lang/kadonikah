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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-CEFRG1B2J4J482DuC_INv4wjdDJJFnn7c1ff2SfGhZHzLmIPAF1yPjYx3Y6BgxTpd5FcbdM5GHwU9UfmHBYg3khJGfXm3OH8t-EjTNz8Si8hY26fJlvxuoDcLMDZvEodaMavsQLqjtPhgZCuvEIE1ZMb1U9xln3Gh0w6tX_nPLC56hnHCOOS1sciKSqlfDXCk6KWWOTvlqr-CEc_rUTr3kZWFxvyz99sYQWb-uwQPgxjkTniKACY',
    link: '#',
    description: 'Saringan teh stainless steel anti karat warna emas gold lengkap dengan gantungan liontin.'
  },
  {
    id: '3',
    name: 'Scented Candle Botanical',
    price: 8000,
    category: 'hemat',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCusO9X7xh5jzyCJdtVpFIsahEuWwlcpwrk6vcNRgkR2feIPPEcdzAmhCdXn2hn6adUUhRPsflXlluzJEg0GUzeeIP5zIYomQ8nsZaH_A721lDcK6v5sXu3k8nn5wN2l1o-rzDd8HwdsGx-IkxS_rb00zabYyMSa_Kn2tw-hhgTu9WerbA_OPncjOdb_ktbbv46NSKw4e7-IlMJZLs1ozcYbDITDU5sXIOyNwJ9rp1CqfsnEvZ73p0s',
    link: '#',
    description: 'Lilin kedelai wangi lavender dan vanilla dalam kaleng aluminium bergaya vintage.'
  },
  {
    id: '5',
    name: 'Linen Pouch Serbaguna',
    price: 9500,
    category: 'budget-fit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDizufDWxskqBx9EydsO49DzyUUYE6USrAbfNUQLu5MryLc_I46YTvoHWhcDuvAw8lL-EQL7mLJjGCUUh0Q7yRIHK4fsQcLUpSA5YW_3ya5rSmijligyvuEkeLF7NWy3ZM4AcyUnOM-3P1clJgdfnxM8vY3nGNmNrMDGKPykTDg6DDL1bPPFM07qUBcVfMd8RoNab7wL71nzNmuT2fHg8ptGAgeBEZXYbR5pq6jLbUbrpxySGJViyna',
    link: '#',
    description: 'Pouch kain blacu katun premium dengan sablon inisial pengantin monogram minimalis.'
  },
  {
    id: '6',
    name: 'Artisan Soap Bar Alami',
    price: 10000,
    category: 'budget-fit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYkz9xIzMKieFUm-7U0eW0hxdi8MMHC7WUB-Jmn6BRwjh0bvYCn8P9FVz9T2Pw2GgAKUBZ5czZG95d6__PieEM-MZClbeFF25ErD4hD8DqNCJKDTv3qoa4R95lJ7IyqnA6fHiZKYOmUDyuQTxaGH8viK6IvzRVkiy2tAuC9Cl0JWPKlU3ysDnMHZ6ZXiRNc2eUzASC8D7WbdSWqXmJhOeCNbbcpgjZcdnR0d1F5fZajV3C2ybBTDCO',
    link: '#',
    description: 'Sabun batang herbal minyak kelapa dan oatmeal dengan aroma relaksasi bunga melati.'
  },
  {
    id: '1',
    name: 'Reed Diffuser Aromaterapi',
    price: 25000,
    category: 'eksklusif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB37vrFDl8lha654jxDUyWC7o55rh18Is6E8Z-VBy8Ate_LtZ1G5ZTO7Wf5gRXwpEDupcmMrVVfJRd9tOQ-aiM5MMYZkJvZK0_kZCQYGi_2NMgpMgX2h2bRRehWFMgtf6GamMeEBxbdtQisO0YH0fLLIVsrqgd-swqG6NBNW1x1VGYkst1kY5D28-XuKwLMabVIEesY4nHGzJLAptQ6yQbpNBPD0-hykJ-T4NSn2LD6VZfzpu-Jd_vn',
    link: '#',
    description: 'Botol kaca estetik 30ml lengkap dengan stick rotan dan box kartu ucapan kustom.'
  },
  {
    id: '2',
    name: 'Cutlery Set Kayu Aesthetic',
    price: 30000,
    category: 'eksklusif',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp_izPFmWDJ2K2v6Q1OBsFlnHE3O-DJBGVVo1DrBX7kb4mzZeCmGwotOEGFiEnVrqb0HXpGugCpzBUsp-g98ulmM3X9_Bt0Fy6SGVnqaRUGo1exCeajXe3IztvPlurcyQNtIz7mwJWvF4esCO_Oiqg5AM7Q5sFeSqJl6s5O1tgH90dMlpsNynGnAGqqR9oLocmhSYWewnLzOLV8IiLikATK52kveZhR5aWExcz85j7Df4ulaOnLFMm',
    link: '#',
    description: 'Sendok, garpu, dan sumpit kayu jati natural dipadukan pouch kanvas tali rami.'
  },
  // --- Crawler-harvested souvenirs (Tokopedia) — Phase-1 hybrid: web_search + web_extract ---
  {
    id: '100',
    name: 'Handuk Terry Palmer Luxury - Royale (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-royale-handuk-couple-set',
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 7rb+ terjual'
  },
  {
    id: '101',
    name: 'Handuk Terry Palmer Luxury - Goldline (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-goldline',
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 250+ terjual'
  },
  {
    id: '102',
    name: 'HAMPERS GIFTBOX POTTON SCARF & A5 ALQURAN CUSTOM NAMA',
    price: 149900,
    category: 'eksklusif',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/find/hampers-giftbox-potton-scarf',
    description: 'Gift Box pernikahan / ulang tahun / wisuda, custom nama. Rating 5.0 • 17 terjual'
  },
  {
    id: '103',
    name: '(Caira) PAKET 50PCS Souvenir Pernikahan Cardholder 3 Slot Aesthetic Wave Ombak',
    price: 123000,
    category: 'budget-fit',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/caira/cardholder-3-slot-aesthetic-wave',
    description: 'Aesthetic souvenir cardholder, isi 50 pcs. Rating 5.0 • 60+ terjual'
  },
  {
    id: '104',
    name: 'Al Quran Custom Nama Motif Oscar Ukuran A5 Plus',
    price: 148000,
    category: 'budget-fit',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/al-mubarok-official/al-quran-custom-nama-motif-oscar-a5',
    description: 'Al Quran custom nama, pouch + tasbih mutiara. Rating 5.0 • 13 terjual'
  },
  {
    id: '105',
    name: 'Capricorn Homeliving Hampers Mug Suvenir Pernikahan',
    price: 97800,
    category: 'hemat',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/capricorndesign/mug-souvenir-pernikahan',
    description: 'Mug souvenir pernikahan / bridal shower, isi 1. Rating 5.0 • 100+ terjual'
  },
  {
    id: '106',
    name: '(BISA COD) Tempat Tisu Bentuk Kerang / Kotak Tisu Mini Pouch',
    price: 39000,
    category: 'hemat',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/futureupin/tempat-tisu-bentuk-kerang',
    description: 'Tempat tisu serbaguna souvenir pernikahan. Rating 5.0 • 8 terjual'
  },
  {
    id: '107',
    name: 'Leolle Bali Patung Janger Bali 10cm',
    price: 90000,
    category: 'budget-fit',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/leollebali/patung-janger-bali-10cm',
    description: 'Kado pernikahan hadiah wedding patung penari bali, gift box etnik klasik. Rating 5.0 • 70+ terjual'
  },
  {
    id: '108',
    name: 'Note book custom (A6) / Souvenir Note Book Pernikahan murah',
    price: 2500,
    category: 'hemat',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/snadaprinting/note-book-custom-a6',
    description: 'Note custom A6, souvenir murah cepat, bisa COD. Rating 5.0 • 2rb+ terjual'
  },
  {
    id: '109',
    name: 'BINSA - Piring Sambal Stainless Mini Piring Kecil Kecap',
    price: 5875,
    category: 'hemat',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/binsakitchenware/piring-sambal-stainless-mini',
    description: 'Piring sambal stainless, souvenir pernikahan TW03. Rating 5.0 • 250+ terjual'
  },
  {
    id: '110',
    name: '(Caira) dompet souvenir pernikahan / dompet kartu card holder aesthetic',
    price: 1956,
    category: 'hemat',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/caira/dompet-souvenir-pernikahan-card-holder',
    description: 'Dompet souvenir pernikahan aesthetic, card holder. Rating 5.0 • 100+ terjual'
  },
  {
    id: '111',
    name: 'Leolle Bali Lilin Aromaterapi Scented Candle Set of 4pcs',
    price: 171000,
    category: 'budget-fit',
    image: 'https://images.tokopedia.net/lib/img/2021/tro/10_oct/tro_placeholder.png',
    link: 'https://www.tokopedia.com/leollebali/lilin-aromaterapi-scented-candle-4pcs',
    description: 'Lilin aromaterapi wangi, gift box eksklusif, home decor aesthetic. Rating 5.0 • 250+ terjual'
  }
];
