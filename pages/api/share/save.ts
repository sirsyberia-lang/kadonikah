import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { budget, guests, coffeePkg, coffeeCost, total } = req.body;
    const id = uuidv4().substring(0, 8);

    const { error } = await supabase.from('shares').insert([
      {
        id,
        budget: String(budget),
        guests: String(guests),
        coffeePkg: String(coffeePkg),
        coffeeCost: String(coffeeCost),
        total: String(total),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id });
  } catch (error: any) {
    console.error('Error saving share:', error);
    return res.status(500).json({ error: 'Failed to save share data' });
  }
}
