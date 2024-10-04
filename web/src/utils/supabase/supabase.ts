import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_URL || '';
const key = process.env.SERVICE_KEY || '';
console.log(url, key);
export const supabase = createClient(url, key);
