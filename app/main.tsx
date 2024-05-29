
import {View, Slider, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function MainPage() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Main Page</Text>
        <Slider
  value={0}
  minimumValue={0}
  maximumValue={10}
  onValueChange={() => console.log('value changed')}
/>
        <View marginT-100 center>
          <Button text70 white background-orange30 label="Login"/>
          <Button link text70 orange30 label="Sign Up" marginT-20/>
        </View>
        <View center>
          <Link href="/Analytic"><Text orange30 text70>Analytic</Text> </Link>
          <Link href="/Balance"><Text orange30 text70>Balance</Text></Link>
        < Link href="/Category"><Text orange30 text70>Category</Text></Link>
        </View>
      </View>
  );
}

