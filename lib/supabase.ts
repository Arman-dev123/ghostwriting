import { createClient } from '@supabase/supabase-js';

// Accessing variables from .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check to ensure variables are loaded
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase Environment Variables in .env.local');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
  preferred_date: string;
  preferred_time: string;
}