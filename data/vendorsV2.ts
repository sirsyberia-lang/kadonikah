export interface VendorV2 {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: string;
  reviews: number;
  startPrice: number;
  priceLabel: string;
  minOrder: string;
  image: string;
  tags: string[];
  phone: string; // WhatsApp phone number (format: 62xxxxxxxxxx)
  description: string;
}

export const vendorsV2: VendorV2[] = [
  {
    id: 'v1',
    name: 'Lumiere Scent Atelier',
    category: 'Scented Candle Souvenir',
    location: 'Jakarta Selatan',
    rating: '5.0',
    reviews: 128,
    startPrice: 3569000,
    priceLabel: '/paket',
    minOrder: '100 pcs',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&q=80',
    tags: ['Aromatherapy', 'Custom Label', 'Free Packaging'],
    phone: '628123456789',
    description: 'Paket souvenir scented candle premium dengan botol kaca transparan, stick rotan & box custom logo. Ready stock, harga Grosir.'
  },
  {
    id: 'v2',
    name: 'Kriya Kayu Nusantara',
    category: 'Wooden Craft Souvenir',
    location: 'Yogyakarta',
    rating: '4.9',
    reviews: 210,
    startPrice: 8900,
    priceLabel: '/pcs',
    minOrder: '50 pcs',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80',
    tags: ['Eco Friendly', 'Food Grade', 'Laser Engrave'],
    phone: '628234567890',
    description: 'Set sendok & garpu kayu jati ekspor dengan pouch blacu katun custom logo.'
  },
  {
    id: 'v3',
    name: 'Sara Coffee & Buffet',
    category: 'Wedding Coffee Catering',
    location: 'Bandung',
    rating: '4.9',
    reviews: 85,
    startPrice: 90000,
    priceLabel: '/pax',
    minOrder: '50 pax',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&q=80',
    tags: ['Live Brewing', '100% Arabica', 'Certified Barista'],
    phone: '628345678901',
    description: 'Layanan coffee bar & buffet catering untuk pernikahan dengan barista profesional dan menu signature.'
  },
  {
    id: 'v4',
    name: 'Canvas & Stitch Studio',
    category: 'Custom Canvas Souvenir',
    location: 'Surabaya',
    rating: '4.9',
    reviews: 164,
    startPrice: 2800000,
    priceLabel: '/paket',
    minOrder: '100 pcs',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80',
    tags: ['Full Custom', 'Sablon', 'Eco Ink'],
    phone: '628456789012',
    description: 'Canvas custom dengan sablon & printing kualitas tinggi untuk souvenir pernikahan unik.'
  },
  {
    id: 'v5',
    name: 'Atelier Tea',
    category: 'Tea Gift Set',
    location: 'Malang',
    rating: '4.9',
    reviews: 92,
    startPrice: 12000000,
    priceLabel: '/paket',
    minOrder: '50 pcs',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    tags: ['Organic', 'Glass Tube', 'Custom Ribbon'],
    phone: '628567890123',
    description: 'Paket teh premium dalam tabung kaca dengan custom ribbon & kemasan elegan untuk acara mewah.'
  },
  {
    id: 'v6',
    name: 'Mini Succulent Paradise',
    category: 'Live Plant Souvenir',
    location: 'Tangerang',
    rating: '4.8',
    reviews: 156,
    startPrice: 9000,
    priceLabel: '/pcs',
    minOrder: '50 pcs',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
    tags: ['Live Plants', 'Terracotta Pot', 'Care Guide'],
    phone: '628678901234',
    description: 'Sukulen hidup pot mini lengkap tag nama & instruksi perawatan.'
  },
  {
    id: 'v7',
    name: 'Batik Silara Canvas',
    category: 'Batik Art Souvenir',
    location: 'Solo',
    rating: '5.0',
    reviews: 203,
    startPrice: 14000,
    priceLabel: '/pcs',
    minOrder: '30 pcs',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&q=80',
    tags: ['Authentic Batik', 'Hand Crafted', 'Traditional'],
    phone: '628789012345',
    description: 'Souvenir batik asli Solo dengan motif tradisional dan modern.'
  },
  {
    id: 'v8',
    name: 'Aromatic Bliss Diffuser',
    category: 'Essential Oil Products',
    location: 'Jakarta Timur',
    rating: '4.9',
    reviews: 178,
    startPrice: 11500,
    priceLabel: '/pcs',
    minOrder: '50 pcs',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&q=80',
    tags: ['Essential Oil', 'Reed Diffuser', 'Natural'],
    phone: '628890123456',
    description: 'Diffuser aromaterapi dengan essential oil pilihan dalam packaging mewah.'
  },
  {
    id: 'v9',
    name: 'Handmade Soap Atelier',
    category: 'Artisan Soap & Bath',
    location: 'Depok',
    rating: '4.8',
    reviews: 142,
    startPrice: 8500,
    priceLabel: '/pcs',
    minOrder: '50 pcs',
    image: 'https://images.unsplash.com/photo-1631415483063-15d936baac1f?w=500&q=80',
    tags: ['Handmade', 'Natural Oils', 'Organic'],
    phone: '628901234567',
    description: 'Sabun herbal artisan dengan formula natural dan aroma pilihan.'
  }
];

export const vendorCategories = [
  { id: 'popular', label: '🔥 Popular Vendors', icon: '🔥' },
  { id: 'decor', label: '💐 Reception Decor', icon: '💐' },
  { id: 'packaging', label: '📦 Packaging', icon: '📦' },
  { id: 'coffee', label: '☕ Coffee Bar', icon: '☕' },
  { id: 'makeup', label: '💄 Makeup', icon: '💄' }
];
