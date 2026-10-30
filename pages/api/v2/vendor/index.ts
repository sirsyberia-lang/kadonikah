import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { data, error } = await supabase
      .from('contents')
      .select('data')
      .eq('key', 'v2_vendor')
      .single();

    if (error || !data) {
      return res.status(200).json([
        { id: 1, name: 'Kopi Kenangan Senja', service: 'Coffee Bar', location: 'Jakarta Selatan' },
        { id: 2, name: 'Sari Souvenir', service: 'Pouch & Mug', location: 'Tangerang' }
      ]);
    }

    return res.status(200).json(data.data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch' });
  }
}
