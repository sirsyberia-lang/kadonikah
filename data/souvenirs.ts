export interface Souvenir {
  id: string;
  name: string;
  price: number;
  category: 'budget-fit' | 'hemat' | 'eksklusif';
  image: string;
  marketplaceLinks: {
    shopee?: string;
    tiktok?: string;
    tokopedia?: string;
  };
  description: string;
}

export const souvenirs: Souvenir[] = [
  {
    id: '4',
    name: 'Tea Strainer Emas Elegan',
    price: 7500,
    category: 'hemat',
    image: '/images/souvenirs/original/4-tea-strainer.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Tea%20Strainer%20Emas%20Elegan', tiktok: 'https://www.tiktok.com/search?q=Tea%20Strainer%20Emas%20Elegan' },
    description: 'Saringan teh stainless steel anti karat warna emas gold lengkap dengan gantungan liontin.'
  },
  {
    id: '3',
    name: 'Scented Candle Botanical',
    price: 8000,
    category: 'hemat',
    image: '/images/souvenirs/original/3-scented-candle.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Scented%20Candle%20Botanical', tiktok: 'https://www.tiktok.com/search?q=Scented%20Candle%20Botanical' },
    description: 'Lilin kedelai wangi lavender dan vanilla dalam kaleng aluminium bergaya vintage.'
  },
  {
    id: '5',
    name: 'Linen Pouch Serbaguna',
    price: 9500,
    category: 'budget-fit',
    image: '/images/souvenirs/original/5-linen-pouch.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Linen%20Pouch%20Serbaguna', tiktok: 'https://www.tiktok.com/search?q=Linen%20Pouch%20Serbaguna' },
    description: 'Pouch kain blacu katun premium dengan sablon inisial pengantin monogram minimalis.'
  },
  {
    id: '6',
    name: 'Artisan Soap Bar Alami',
    price: 10000,
    category: 'budget-fit',
    image: '/images/souvenirs/original/6-artisan-soap.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Artisan%20Soap%20Bar%20Alami', tiktok: 'https://www.tiktok.com/search?q=Artisan%20Soap%20Bar%20Alami' },
    description: 'Sabun batang herbal minyak kelapa dan oatmeal dengan aroma relaksasi bunga melati.'
  },
  {
    id: '1',
    name: 'Reed Diffuser Aromaterapi',
    price: 25000,
    category: 'eksklusif',
    image: '/images/souvenirs/original/1-reed-diffuser.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Reed%20Diffuser%20Aromaterapi', tiktok: 'https://www.tiktok.com/search?q=Reed%20Diffuser%20Aromaterapi' },
    description: 'Botol kaca estetik 30ml lengkap dengan stick rotan dan box kartu ucapan kustom.'
  },
  {
    id: '2',
    name: 'Cutlery Set Wood Aesthetic',
    price: 30000,
    category: 'eksklusif',
    image: '/images/souvenirs/original/2-cutlery-set.jpg',
    marketplaceLinks: { tokopedia: '#', shopee: 'https://shopee.co.id/search?keyword=Cutlery%20Set%20Wood%20Aesthetic', tiktok: 'https://www.tiktok.com/search?q=Cutlery%20Set%20Wood%20Aesthetic' },
    description: 'Sendok, garpu, dan sumpit kayu jati natural dipadukan pouch kanvas tali rami.'
  },
  {
    id: '100',
    name: 'Handuk Terry Palmer Luxury - Royale (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/100-handuk-terry-palmer---royale.svg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-royale-handuk-couple-set', shopee: 'https://shopee.co.id/Terry-Palmer-Luxury-Royale-Handuk-Couple-Set-i.133323033.47850906580', tiktok: 'https://www.tiktok.com/search?q=Handuk%20Terry%20Palmer%20Luxury%20-%20Royale%20%28Handuk%20Couple%20Set%29' },
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 7rb+ terjual'
  },
  {
    id: '101',
    name: 'Handuk Terry Palmer Luxury - Goldline (Handuk Couple Set)',
    price: 319900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/101-handuk-terry-palmer---goldline.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/terrypalmer/handuk-terry-palmer-luxury-goldline', shopee: 'https://shopee.co.id/Terry-Palmer-Luxury-Goldline-Handuk-Couple-Set-i.133323033.47850906581', tiktok: 'https://www.tiktok.com/search?q=Handuk%20Terry%20Palmer%20Luxury%20-%20Goldline%20%28Handuk%20Couple%20Set%29' },
    description: 'Handuk mandi 70 x 140cm, Gift Box Couple, Kado Pernikahan / Souvenir. Rating 5.0 • 250+ terjual'
  },
  {
    id: '102',
    name: 'HAMPERS GIFTBOX POTTON SCARF & A5 ALQURAN CUSTOM NAMA',
    price: 149900,
    category: 'eksklusif',
    image: '/images/souvenirs/crawled/102-hampers-giftbox-potton-scarf.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/find/hampers-giftbox-potton-scarf', shopee: 'https://shopee.co.id/search?keyword=HAMPERS%20GIFTBOX%20POTTON%20SCARF%20%26%20A5%20ALQURAN%20CUSTOM%20NAMA', tiktok: 'https://www.tiktok.com/search?q=HAMPERS%20GIFTBOX%20POTTON%20SCARF%20%26%20A5%20ALQURAN%20CUSTOM%20NAMA' },
    description: 'Gift Box pernikahan / ulang tahun / wisuda, custom nama. Rating 5.0 • 17 terjual'
  },
  {
    id: '103',
    name: '(Caira) PAKET 50PCS Souvenir Pernikahan Cardholder 3 Slot Aesthetic Wave Ombak',
    price: 123000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/103-cardholder-3-slot-aesthetic.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/caira/cardholder-3-slot-aesthetic-wave', shopee: 'https://shopee.co.id/search?keyword=%28Caira%29%20PAKET%2050PCS%20Souvenir%20Pernikahan%20Cardholder%203%20Slot%20Aesthetic%20Wave%20Ombak', tiktok: 'https://www.tiktok.com/search?q=%28Caira%29%20PAKET%2050PCS%20Souvenir%20Pernikahan%20Cardholder%203%20Slot%20Aesthetic%20Wave%20Ombak' },
    description: 'Aesthetic souvenir cardholder, isi 50 pcs. Rating 5.0 • 60+ terjual'
  },
  {
    id: '104',
    name: 'Al Quran Custom Nama Motif Oscar Ukuran A5 Plus',
    price: 148000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/104-al-quran-custom-nama-oscar.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/al-mubarok-official/al-quran-custom-nama-motif-oscar-a5', shopee: 'https://shopee.co.id/search?keyword=Al%20Quran%20Custom%20Nama%20Motif%20Oscar%20Ukuran%20A5%20Plus', tiktok: 'https://www.tiktok.com/search?q=Al%20Quran%20Custom%20Nama%20Motif%20Oscar%20Ukuran%20A5%20Plus' },
    description: 'Al Quran custom nama, pouch + tasbih mutiara. Rating 5.0 • 13 terjual'
  },
  {
    id: '105',
    name: 'Capricorn Homeliving Hampers Mug Suvenir Pernikahan',
    price: 97800,
    category: 'hemat',
    image: '/images/souvenirs/crawled/105-hampers-mug-suvenir.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/capricorndesign/mug-souvenir-pernikahan', shopee: 'https://shopee.co.id/search?keyword=Capricorn%20Homeliving%20Hampers%20Mug%20Suvenir%20Pernikahan', tiktok: 'https://www.tiktok.com/search?q=Capricorn%20Homeliving%20Hampers%20Mug%20Suvenir%20Pernikahan' },
    description: 'Mug souvenir pernikahan / bridal shower, isi 1. Rating 5.0 • 100+ terjual'
  },
  {
    id: '106',
    name: '(BISA COD) Tempat Tisu Bentuk Kerang / Kotak Tisu Mini Pouch',
    price: 39000,
    category: 'hemat',
    image: '/images/souvenirs/crawled/106-tempat-tisu-bentuk-kerang.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/futureupin/tempat-tisu-bentuk-kerang', shopee: 'https://shopee.co.id/search?keyword=%28BISA%20COD%29%20Tempat%20Tisu%20Bentuk%20Kerang%20/%20Kotak%20Tisu%20Mini%20Pouch', tiktok: 'https://www.tiktok.com/search?q=%28BISA%20COD%29%20Tempat%20Tisu%20Bentuk%20Kerang%20/%20Kotak%20Tisu%20Mini%20Pouch' },
    description: 'Tempat tisu serbaguna souvenir pernikahan. Rating 5.0 • 8 terjual'
  },
  {
    id: '107',
    name: 'Leolle Bali Patung Janger Bali 10cm',
    price: 90000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/107-patung-janger-bali-10cm.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/leollebali/patung-janger-bali-10cm', shopee: 'https://shopee.co.id/search?keyword=Leolle%20Bali%20Patung%20Janger%20Bali%2010cm', tiktok: 'https://www.tiktok.com/search?q=Leolle%20Bali%20Patung%20Janger%20Bali%2010cm' },
    description: 'Kado pernikahan hadiah wedding patung penari bali, gift box etnik klasik. Rating 5.0 • 70+ terjual'
  },
  {
    id: '108',
    name: 'Note book custom (A6) / Souvenir Note Book Pernikahan murah',
    price: 2500,
    category: 'hemat',
    image: '/images/souvenirs/crawled/108-note-book-custom-a6.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/snadaprinting/note-book-custom-a6', shopee: 'https://shopee.co.id/search?keyword=Note%20book%20custom%20%28A6%29%20/%20Souvenir%20Note%20Book%20Pernikahan%20murah', tiktok: 'https://www.tiktok.com/search?q=Note%20book%20custom%20%28A6%29%20/%20Souvenir%20Note%20Book%20Pernikahan%20murah' },
    description: 'Note custom A6, souvenir murah cepat, bisa COD. Rating 5.0 • 2rb+ terjual'
  },
  {
    id: '109',
    name: 'BINSA - Piring Sambal Stainless Mini Piring Kecil Kecap',
    price: 5875,
    category: 'hemat',
    image: '/images/souvenirs/crawled/109-piring-sambal-stainless.svg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/binsakitchenware/piring-sambal-stainless-mini', shopee: 'https://shopee.co.id/search?keyword=BINSA%20-%20Piring%20Sambal%20Stainless%20Mini%20Piring%20Kecil%20Kecap', tiktok: 'https://www.tiktok.com/search?q=BINSA%20-%20Piring%20Sambal%20Stainless%20Mini%20Piring%20Kecil%20Kecap' },
    description: 'Piring sambal stainless, souvenir pernikahan TW03. Rating 5.0 • 250+ terjual'
  },
  {
    id: '110',
    name: '(Caira) dompet souvenir pernikahan / dompet kartu card holder aesthetic',
    price: 1956,
    category: 'hemat',
    image: '/images/souvenirs/crawled/110-dompet-souvenir-card-holder.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/caira/dompet-souvenir-pernikahan-card-holder', shopee: 'https://shopee.co.id/search?keyword=%28Caira%29%20dompet%20souvenir%20pernikahan%20/%20dompet%20kartu%20card%20holder%20aesthetic', tiktok: 'https://www.tiktok.com/search?q=%28Caira%29%20dompet%20souvenir%20pernikahan%20/%20dompet%20kartu%20card%20holder%20aesthetic' },
    description: 'Dompet souvenir pernikahan aesthetic, card holder. Rating 5.0 • 100+ terjual'
  },
  {
    id: '111',
    name: 'Leolle Bali Lilin Aromaterapi Scented Candle Set of 4pcs',
    price: 171000,
    category: 'budget-fit',
    image: '/images/souvenirs/crawled/111-lilin-aromaterapi-4pcs.jpg',
    marketplaceLinks: { tokopedia: 'https://www.tokopedia.com/leollebali/lilin-aromaterapi-scented-candle-4pcs', shopee: 'https://shopee.co.id/search?keyword=Leolle%20Bali%20Lilin%20Aromaterapi%20Scented%20Candle%20Set%20of%204pcs', tiktok: 'https://www.tiktok.com/search?q=Leolle%20Bali%20Lilin%20Aromaterapi%20Scented%20Candle%20Set%20of%204pcs' },
    description: 'Lilin aromaterapi wangi, gift box eksklusif, home decor aesthetic. Rating 5.0 • 250+ terjual'
  }
];