
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function Forgot() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Forgot Password</Text>
        <TextField text50 placeholder="E-mail or Phone number" grey10/>
        <View marginT-100 center>
          <Button text70 white background-orange30 label="Recover a password"/>
        </View>
      </View>
  );
}

