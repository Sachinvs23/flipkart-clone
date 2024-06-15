import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jtqzppdwytpakwwkkkgt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0cXpwcGR3eXRwYWt3d2tra2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NTE3NDIsImV4cCI6MjAzNDAyNzc0Mn0.I3cRdWDeqM5N-Fyyi-b6WCGPDUD7r8j75lIlAeppy48';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;