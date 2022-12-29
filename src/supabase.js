import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hpxpusybswuamozasend.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhweHB1c3lic3d1YW1vemFzZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NjE2ODAsImV4cCI6MTk4NzAzNzY4MH0.CeAhTe5-matAsFcR-PO5AMOT7AAt2KsM_FpyoIDTjxE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
