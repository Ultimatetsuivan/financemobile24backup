import {useState} from 'react';
import { Alert, AppState } from 'react-native'
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { supabase } from '@/lib/supabase'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
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
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>SignUp Page</Text>
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
        <Button text70 white background-orange30 label="Sign Up"  disabled={loading} onPress={() => signUpWithEmail()}/>
      </View>
    </View>
  );
}

