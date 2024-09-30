import { supabase } from '../supabase';
export const tshirtQuery = supabase.from('t-shirts').select(`
  id,
  created_at,
  name,
  sizes,
  price,
  is_on_sale,
  discount_price,
  image_url,
  image_alt
  `);
