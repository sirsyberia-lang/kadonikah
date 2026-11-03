import type { NextApiRequest, NextApiResponse } from 'next';
import { souvenirs as staticSouvenirs } from '../../../../data/souvenirs';

let db: any = null;
try {
  const dbModule = require('../../../../lib/db.js');
  db = dbModule.default || dbModule;
} catch (e) {
  console.warn('[API] SQLite unavailable, using static fallback');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  console.log('[API DEBUG] Handler called');
  console.log('[API DEBUG] staticSouvenirs length:', staticSouvenirs?.length);
  console.log('[API DEBUG] db exists:', !!db);

  try {
    if (db) {
      const products = db.prepare('SELECT id, name, price, image, marketplaceLinks FROM products ORDER BY id').all();
      
      if (products && products.length > 0) {
        const souvenirs = products.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: p.price,
          category: determineCategory(p.price),
          image: p.image || '/images/souvenirs/original/1-reed-diffuser.jpg',
          description: 'Souvenir unik & menarik dari rekomendasi vendor Shopee.',
          marketplaceLinks: p.marketplaceLinks ? JSON.parse(p.marketplaceLinks) : { shopee: '#', tiktok: '#', tokopedia: '#' }
        }));
        return res.status(200).json(souvenirs);
      }
    }
    
    // Fallback to static
    return res.status(200).json(staticSouvenirs);
  } catch (err) {
    console.error('[API ERROR]', err);
    return res.status(200).json(staticSouvenirs);
  }
}

function determineCategory(price: number): 'hemat' | 'budget-fit' | 'eksklusif' {
  if (price < 7000) return 'hemat';
  if (price <= 13000) return 'budget-fit';
  return 'eksklusif';
}
