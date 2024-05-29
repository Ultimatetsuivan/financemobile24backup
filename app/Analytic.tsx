
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Analytic & report</Text>
        <TextField text50 placeholder="enter feedback" grey10/>
        <View marginT-100 center>
          <Text blue20 text30>Here is your Analytic and report</Text>
          <a  href="/main" ><Button text70 white background-orange30 label="Main"/></a>
        </View>
      </View>
  );
}

