import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const products = db.prepare('SELECT id, name, price, image, source_url FROM products ORDER BY id').all();
    
    // Transform to match Souvenir interface
    const souvenirs = products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      category: determineCategoryByPrice(p.price),
      image: p.image || '/images/souvenirs/original/1-reed-diffuser.jpg',
      description: `Souvenir berkualitas dari database SQLite`,
      marketplaceLinks: { shopee: '#', tiktok: '#', tokopedia: '#' }
    }));

    return res.status(200).json(souvenirs);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}

function determineCategoryByPrice(price: number): 'hemat' | 'budget-fit' | 'eksklusif' {
  if (price < 5000) return 'hemat';
  if (price < 15000) return 'budget-fit';
  return 'eksklusif';
}
