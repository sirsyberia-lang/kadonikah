import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { budget, guests, coffeePkg, coffeeCost, total } = req.body;
    const id = uuidv4().substring(0, 8);

    const stmt = db.prepare(`
      INSERT INTO shares (id, budget, guests, coffeePkg, coffeeCost, total)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(id, String(budget), String(guests), String(coffeePkg), String(coffeeCost), String(total));

    return res.status(200).json({ success: true, id });
  } catch (error: any) {
    console.error('Error saving share:', error);
    return res.status(500).json({ error: 'Failed to save share data' });
  }
}
