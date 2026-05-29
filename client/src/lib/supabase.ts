import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pfgakxmdgthfjduesoxt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZ2FreG1kZ3RoZmpkdWVzb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwMzcxMDEsImV4cCI6MjA5NTYxMzEwMX0.sPKzUPyNUBUuypJIfw-F3-aRXChlFJFd1fReL0Fm5o4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);