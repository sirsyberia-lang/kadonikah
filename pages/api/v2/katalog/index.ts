import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { supabase } from '../../../../lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { data, error } = await supabase
      .from('contents')
      .select('data')
      .eq('key', 'v2_katalog')
      .single();
    if (!error && data?.data) return res.status(200).json(data.data);
  } catch (err) {
    console.warn('Supabase offline, fallback to local file');
  }

  // Fallback: read from public/data/katalog.json
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'katalog.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    return res.status(200).json(data);
  } catch (err) {
    console.error('Failed to read local file:', err);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}
