import { createClient } from '@supabase/supabase-js';

// ⚠️ Replace these two values with yours from Supabase → Settings → API
const SUPABASE_URL      = 'https://kpfvopuyqwzpvlyspsmy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZnZvcHV5cXd6cHZseXNwc215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMTExMzMsImV4cCI6MjA5NzY4NzEzM30.9B3BPvpY6lmAyiWGLgAC5i6AfTJIAmqjRAm3XBnui40';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Generates a unique ID for this browser so each visitor has their own cart
export function getSessionId() {
  let id = localStorage.getItem('sayhan_session');
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('sayhan_session', id);
  }
  return id;
}