import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, error } = await supabase
      .from('shares')
      .select('*')
      .eq('id', String(id))
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'Share link not found' });
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Error fetching share:', error);
    return res.status(500).json({ error: 'Failed to fetch share data' });
  }
}
