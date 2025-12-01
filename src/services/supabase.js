import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cimjqtfcusdkeovktgio.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbWpxdGZjdXNka2Vvdmt0Z2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5ODA0MzEsImV4cCI6MjA3OTU1NjQzMX0.8ARJBOi_Ax3FFqFRcJ_v5mMT7cdUWVfIp3m_-PO6_1Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
