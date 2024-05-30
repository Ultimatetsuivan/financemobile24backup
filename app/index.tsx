
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Login Page</Text>
        <TextField text50 placeholder="username" grey10/>
        <TextField text50 placeholder="password" secureTextEntry grey10/>
        <View marginT-100 center>
          <Button text70 white background-orange30 label="Login"/>
          <Link  href="/forgot_pass">Forgot a password</Link>
          <Link href="/signup"><Text orange30 text70>Sign up</Text> </Link>
          <Link href="/main">Main</Link>
        </View>
      </View>
  );
}

