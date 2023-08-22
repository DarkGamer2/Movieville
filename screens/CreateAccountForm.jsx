import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import {colors} from '../assets/colors/colors';
export default function CreateAccountForm(props) {
  return (
    <Modal animationType="slide">
      <View>
        <View>
          <Text>CREATE ACCOUNT</Text>
        </View>
        <View>
          <Text>Username: </Text>
          <TextInput placeholder="Username" />
          <Text>Email: </Text>
          <TextInput placeholder="Email" />
          <Text>Password: </Text>
          <TextInput placeholder="Password" />
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('NavigationBar')}>
            <Text style={accountFormStyles.accountButton}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const accountFormStyles = StyleSheet.create({
  accountButton: {
    backgroundColor: colors.red,
    textAlign: 'center',
    color: colors.white,
    margin: 10,
    padding: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
