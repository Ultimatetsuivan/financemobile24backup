import { Slider, Text, Button } from 'react-native-ui-lib';
import { Link } from 'expo-router';
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { supabase } from '../lib/supabase'

export default function MainPage() {
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      // You can add any additional actions after sign out if needed
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <View paddingH-25 paddingT-120>
      <Text blue50 text20>Main Page</Text>
      <Slider
        value={0}
        minimumValue={0}
        maximumValue={10}
        onValueChange={() => console.log('value changed')}
      />
      <View marginT-100 >
        <Button text70 white background-orange30 label="Login"/>
        <Button link text70 orange30 label="Sign Up" marginT-20/>
      </View>
      <View >
        <Link href="/analytic"><Text orange30 text70>Analytic</Text> </Link>
        <Link href="/balance"><Text orange30 text70>Balance</Text></Link>
        <Link href="/category"><Text orange30 text70>Category</Text></Link>
      </View>
      <View>
        <Button label="Sign Out" onPress={handleSignOut} />
      </View>
    </View>
  );
}
