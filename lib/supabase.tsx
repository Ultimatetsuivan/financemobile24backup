import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://nzggbbsytokpwvfllbqf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56Z2diYnN5dG9rcHd2ZmxsYnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMzgyMDEsImV4cCI6MjAzMjYxNDIwMX0.gMns_39fLAWcKgjoHnPceDgx2xErZ85GiDhzn4TivXs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})