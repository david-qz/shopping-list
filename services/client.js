const SUPABASE_URL = 'https://vzzttwritrdyvrtauwik.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6enR0d3JpdHJkeXZydGF1d2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1MzAxNDAsImV4cCI6MTk3MjEwNjE0MH0.OZoBLEtI2H0xc6S1cVvcaB5oNbZjREq_ykDTRnnhZGc';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
