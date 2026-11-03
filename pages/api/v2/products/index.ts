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

    if (!error && data?.data) {
      return res.status(200).json(data.data);
    }

    return res.status(200).json([]);
  } catch (err) {
    console.error('Failed to fetch products:', err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}
