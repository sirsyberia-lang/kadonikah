const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Load env vars (dari project root)
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function importToSupabase() {
  try {
    console.log('📂 Reading fetched payload...');
    const payloadPath = path.join(__dirname, 'fetched_souvenirs_payload.json');
    const products = JSON.parse(fs.readFileSync(payloadPath, 'utf8'));

    console.log(`✅ Loaded ${products.length} products`);
    console.log('📡 Importing to Supabase...');

    // Upsert ke table `contents` dengan key `v2_katalog`
    const { data, error } = await supabase
      .from('contents')
      .upsert({
        key: 'v2_katalog',
        data: products,
        updated_at: new Date().toISOString()
      }, { onConflict: 'key' });

    if (error) {
      console.error('❌ Supabase Error:', error);
      process.exit(1);
    }

    console.log('✅ Import Success!');
    console.log(`📊 Imported ${products.length} products to v2_katalog`);
    console.log('🎉 Data is now live on CMS & API endpoints!');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

importToSupabase();
