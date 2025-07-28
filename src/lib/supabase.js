import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://yvgqfsjcnjfcxlzurkor.supabase.co'
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Z3Fmc2pjbmpmY3hsenVya29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NzQxNzIsImV4cCI6MjA2OTI1MDE3Mn0.xjGBhlxxsKKsRYLIjdcnnLEz-cCo05Td3KgO0PTYq2g'

export const supabase = createClient(supabaseUrl, supabaseKey) 