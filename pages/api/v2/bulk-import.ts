import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const products = req.body;
  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Payload must be an array of products' });
  }

  try {
    const { data, error } = await supabase
      .from('contents')
      .upsert({
        key: 'v2_katalog',
        data: products,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, inserted: products.length });
  } catch (err: any) {
    console.error('Bulk import error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
}
