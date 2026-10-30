import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const stmt = db.prepare('SELECT * FROM shares WHERE id = ?');
    const share = stmt.get(id);

    if (!share) {
      return res.status(404).json({ error: 'Share link not found' });
    }

    return res.status(200).json(share);
  } catch (error: any) {
    console.error('Error fetching share:', error);
    return res.status(500).json({ error: 'Failed to fetch share data' });
  }
}
