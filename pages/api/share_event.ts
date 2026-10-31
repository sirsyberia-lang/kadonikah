import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { souvenir_id, event_type, guest_count, coffee_cost, total } = req.body;

  try {
    // Attempt save to Supabase
    const { data, error } = await supabase.from('share_events').insert({
      souvenir_id: String(souvenir_id || ''),
      event_type: event_type || 'copy_link',
      guest_count: Number(guest_count || 0),
      coffee_cost: Number(coffee_cost || 0),
      total: Number(total || 0),
      timestamp: new Date().toISOString()
    });

    if (error) {
      console.warn('Supabase share_event log warning (stored locally/skipped):', error.message);
    }

    return res.status(200).json({ success: true, logged: !error });
  } catch (err: any) {
    console.error('Share event handler catch:', err);
    return res.status(200).json({ success: true, logged: false });
  }
}
