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
  }
];
