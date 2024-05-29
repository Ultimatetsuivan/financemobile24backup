
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text30>Analytic & report</Text>
        <View marginT-20 center>
          <Text orange30 text50>Here is your Analytic and report</Text>
        
          <Button marginT-20 text70 white background-orange30 label="feedback"/>
          <Link  href="/main" ><Text  orange30 text70>main</Text></Link>
        </View>
      </View>
  );
}
