import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { data, error } = await supabase
      .from('contents')
      .select('data')
      .eq('key', 'v2_vendors')
      .single();

    if (error || !data) {
      // Return null or error so frontend can fallback to static vendorsV2
      return res.status(404).json({ error: 'Vendors not found in Supabase' });
    }

    return res.status(200).json(data.data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch vendors' });
  }
}
