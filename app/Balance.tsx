
import {View, TextField, Text, Button} from 'react-native-ui-lib';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Balance</Text>
        <Text marginT-20 orange20 text50>Balance: 100000$</Text>
        <View flex>
          <Button marginT-20 text70 white background-orange30 label="Deposit"/>
          <Button marginT-20 text70 white background-orange30 label="Withdraw"/>
        </View>
        <View marginT-20 center>
          <Link  href="/main" ><Text orange30 text70>main</Text></Link>
        </View>
      </View>
  );
}

