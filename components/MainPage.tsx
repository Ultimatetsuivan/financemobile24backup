
import {View, Slider, Text} from 'react-native-ui-lib';
import { Button } from 'react-native'
import { supabase } from '@/lib/supabase'

export function MainPage() {
  return (
    <View flex paddingH-25 paddingT-120>
      <Text blue50 text20>Main Page</Text>
      <Slider
        value={0}
        minimumValue={0}
        maximumValue={10}
        onValueChange={() => console.log('value changed')}
      />
    <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}

