import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../lib/db';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // Try to fetch from Supabase first
    try {
      const { data, error } = await supabase
        .from('contents')
        .select('data')
        .eq('key', 'v2_katalog')
        .single();

      if (!error && data?.data) {
        return res.status(200).json(data.data);
      }
    } catch (supabaseErr) {
      console.log('Supabase fetch failed, falling back to SQLite');
    }

    // Fallback to SQLite products
    const products = db.prepare('SELECT id, name, price, image, source_url FROM products ORDER BY id').all();
    
    const souvenirs = products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      category: determineCategoryByPrice(p.price),
      image: p.image || '/images/souvenirs/original/1-reed-diffuser.jpg',
      description: `Souvenir berkualitas - ${p.name}`,
      marketplaceLinks: { shopee: '#', tiktok: '#', tokopedia: '#' }
    }));

    return res.status(200).json(souvenirs);
  } catch (err) {
    console.error('Failed to fetch katalog:', err);
    return res.status(500).json({ error: 'Failed to fetch katalog' });
  }
}

function determineCategoryByPrice(price: number): 'hemat' | 'budget-fit' | 'eksklusif' {
  if (price < 5000) return 'hemat';
  if (price < 15000) return 'budget-fit';
  return 'eksklusif';
}
