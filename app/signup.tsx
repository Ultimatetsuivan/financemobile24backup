
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import {useState} from 'react';
import { Alert, AppState } from 'react-native';
import { Input } from '@rneui/themed';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
  

export default function Signup() {
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
      if (!session) Alert.alert('Sign up succeed!')
      setLoading(false)
    }
    return (
      <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>SignUp Page</Text>
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
        <View marginT-100 center>
          <Button  white background-orange30 label="Sign Up"  disabled={loading} onPress={() => signUpWithEmail()}/>
        </View>
      </View>
    );
  
}

