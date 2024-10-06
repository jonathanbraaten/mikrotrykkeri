import { supabase } from '../supabase';
export const tshirtsQuery = supabase.from('t-shirts').select(`
  id,
  created_at,
  name,
  sizes,
  color,
  price,
  is_on_sale,
  discount_price,
  image_url,
  image_alt
  `);

export const tshirtQuery = async (id: number) => {
  const { data, error } = await supabase
    .from('t-shirts')
    .select(
      `  id,
  created_at,
  name,
  description,
  sizes,
  color,
  price,
  is_on_sale,
  discount_price,
  image_url,
  image_alt`,
    )
    .eq('id', id);

  if (error) {
    console.error('Errof etching-t-shirt', error);
  }

  return data;
};
