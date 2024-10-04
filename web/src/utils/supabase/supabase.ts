import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_URL || '';
const key = process.env.SERVICE_KEY || '';
export const supabase = createClient(url, key);
