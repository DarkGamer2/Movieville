import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Modal,
  View,
  StyleSheet,
} from 'react-native';
import {colors} from '../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
export default function LoginForm(props) {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('NavigationBar'), setLoginText('LOGGING IN...');
  };
  const [loginText, setLoginText] = useState('LOGIN');
  return (
    <Modal animationType="slide">
      <ScrollView style={formStyles.body}>
        <View>
          <Text style={formStyles.loginText}>LOGIN</Text>
          <Text style={formStyles.labelText}>Username: </Text>
          <TextInput
            style={formStyles.formInputField}
            placeholder="John Doe"
            placeholderTextColor={colors.white}
          />
          <Text style={formStyles.labelText}>Password: </Text>
          <TextInput
            style={formStyles.formInputField}
            placeholder="Password"
            placeholderTextColor={colors.white}
          />
          <Pressable onPress={handleLogin}>
            <Text style={formStyles.loginButton}>{loginText}</Text>
          </Pressable>
          <Pressable onPress={props.Cancel}>
            <Text style={formStyles.loginButton}>CANCEL</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}

const formStyles = StyleSheet.create({
  body: {
    backgroundColor: colors.black,
  },
  loginText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    margin: 50,
    fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
  },
  formInputField: {
    backgroundColor: colors.lightYellow,
    width: 200,
    alignSelf: 'center',
    color: colors.white,
    backgroundColor: colors.slateBlack,
  },
  labelText: {
    color: colors.white,
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  loginButton: {
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
