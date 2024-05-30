import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import {LoginPage} from '@/components/LoginPage'
import {MainPage} from '@/components/MainPage'
import {View} from 'react-native-ui-lib';
import { Session } from '@supabase/supabase-js'

export default function Index() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <View flex>
      {session && session.user ? <MainPage key={session.user.id} /> : <LoginPage />}
    </View>
  )
}