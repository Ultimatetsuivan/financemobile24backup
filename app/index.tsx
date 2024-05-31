
import {Slider, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Login from './login'
import Main from './main'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function MainPage() {
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
    <View >
      {session && session.user ? <Main /> : <Login />}
    </View>
  );
}

