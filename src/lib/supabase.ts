import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://autchyynurmdgwrtmxip.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1dGNoeXludXJtZGd3cnRteGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjEzMjAsImV4cCI6MjA1NDY5NzMyMH0.bYpojp0rj__P_RpUNW5a8Xod4cztq6kTniGnD2QKlbM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
