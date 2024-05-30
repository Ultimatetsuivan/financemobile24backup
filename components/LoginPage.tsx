import {useState} from 'react';
import { Alert, AppState } from 'react-native'
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export function LoginPage() {
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
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>Login Page</Text>
      <TextField
        text50 
        floatingPlaceholder
        placeholder="E-mail"
        enableErrors
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextField
        text50 
        placeholder="password"
        secureTextEntry
        enableErrors
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View marginT-100 center>
        <Button text70 white background-orange30 label="Login"  disabled={loading} onPress={() => signInWithEmail()}/>
      </View>
      <View marginT-100 center>
        <Link href="/signup">
        Sign Up
          {/* <Button link text70 orange30 label="Sign Up" marginT-20/> */}
        </Link>
      </View>
    </View>
  );
}

