import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const products = db.prepare('SELECT id, name, price, image, source_url, marketplaceLinks FROM products ORDER BY id').all();
    
    // Transform to match Souvenir interface
    const souvenirs = products.map((p: any) => {
      let mpLinks = { shopee: '#', tiktok: '#', tokopedia: '#' };
      if (p.marketplaceLinks) {
        try {
          mpLinks = JSON.parse(p.marketplaceLinks);
        } catch (e) {
          // fallback default
        }
      } else if (p.source_url) {
        mpLinks.shopee = p.source_url;
      }

      return {
        id: p.id,
        name: p.name,
        price: p.price,
        category: determineCategoryByPrice(p.price),
        image: p.image || '/images/souvenirs/original/1-reed-diffuser.jpg',
        description: `Souvenir unik & menarik dari rekomendasi terbaik vendor Shopee.`,
        marketplaceLinks: mpLinks
      };
    });

    return res.status(200).json(souvenirs);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}

function determineCategoryByPrice(price: number): 'hemat' | 'budget-fit' | 'eksklusif' {
  if (price < 7000) return 'hemat';
  if (price <= 13000) return 'budget-fit';
  return 'eksklusif';
}