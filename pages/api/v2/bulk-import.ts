import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const products = req.body;
  if (!Array.isArray(products)) {
    return res.status(400).json({ error: 'Payload must be an array of products' });
  }

  try {
    const insert = db.prepare(`
      INSERT OR REPLACE INTO products (id, name, price, image, source_url)
      VALUES (?, ?, ?, ?, ?)
    `);

    let count = 0;
    
    // Node:sqlite DatabaseSync uses a simpler transaction flow
    db.exec('BEGIN TRANSACTION');
    try {
        for (const product of products) {
            if (product.id && product.name && product.price) {
                insert.run(
                    product.id,
                    product.name,
                    product.price,
                    product.image || '',
                    product.source_url || ''
                );
                count++;
            }
        }
        db.exec('COMMIT');
    } catch (e) {
        db.exec('ROLLBACK');
        throw e;
    }
    
    return res.status(200).json({ success: true, inserted: count });
  } catch (err: any) {
    console.error('Bulk import error:', err);
    return res.status(500).json({ error: 'Internal server error: ' + err.message });
  }
}
