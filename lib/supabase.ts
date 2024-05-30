import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://surokdyukacnxewbqqrp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cm9rZHl1a2Fjbnhld2JxcXJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMzMzNzksImV4cCI6MjAzMjYwOTM3OX0.-Dy-Y-GqNImn9hCJYWdJWfBfpNxMRFlNZ_JxM-qz1kI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})