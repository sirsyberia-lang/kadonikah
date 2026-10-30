import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { data, error } = await supabase
      .from('contents')
      .select('data')
      .eq('key', 'v2_katalog')
      .single();

    if (error || !data) {
      // Fallback data if DB is empty
      return res.status(200).json([
        { id: 1, name: 'Souvenir Pouch Kanvas', price: 5000, category: 'hemat', description: 'Pouch minimalis bahan kanvas tebal.' },
        { id: 2, name: 'Tumbler Bambu Eksklusif', price: 45000, category: 'eksklusif', description: 'Tumbler stainless dengan balutan bambu alami.' }
      ]);
    }

    return res.status(200).json(data.data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch' });
  }
}
