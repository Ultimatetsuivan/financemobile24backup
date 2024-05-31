
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';
import React, { useState } from 'react'
import { Alert, StyleSheet,  AppState } from 'react-native'
import { supabase } from '../lib/supabase'
import {  Input } from '@rneui/themed'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Index() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }
 
  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View  paddingH-25 paddingT-120>
        <Text blue50 text20>Login Page</Text>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
        <View marginT-100 >
          <Link  href="/forgot_pass">Forgot a password</Link>
          <Button text70 orange30 label="Login" disabled={loading} onPress={() => signInWithEmail()} />
          <Button text70 orange30 label="Register" disabled={loading} onPress={() => signUpWithEmail()} />
        </View>
      </View>
  );
}

