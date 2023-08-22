import {Text, View, Pressable, ScrollView, StyleSheet} from 'react-native';
import {useState} from 'react';
import LoginForm from './LoginForm';
import CreateAccountForm from './CreateAccountForm';
import {colors} from '../assets/colors/colors';
export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);
  const pressedModal = () => {
    setModalVisible(true);
  };
  const cancelledModal = () => {
    setModalVisible(false);
  };
  return (
    <ScrollView style={stackStyles.body}>
      <View>
        <Text style={stackStyles.title}>MOVIEVILLE</Text>
        <Pressable onPress={pressedModal}>
          <Text style={stackStyles.buttonText}>LOGIN</Text>
        </Pressable>
        {modalVisible ? (
          <LoginForm visible={modalVisible} Cancel={cancelledModal} />
        ) : null}
        <View>
          <Pressable>
            <Text style={stackStyles.createAccountButton}>CREATE ACCOUNT</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const stackStyles = StyleSheet.create({
  buttonText: {
    backgroundColor: colors.red,
    padding: 10,
    margin: 10,
    width: 200,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  screenText: {
    textAlign: 'center',
    fontSize: 35,
    fontVariant: 'bold',
    margin: 20,
    color: colors.white,
    fontFamily: 'Lato-Bold',
  },
  createAccountButton: {
    backgroundColor: colors.red,
    padding: 10,
    margin: 10,
    width: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
  },
  title: {
    fontSize: 40,
    fontVariant: 'bold',
    fontFamily: 'BebasNeue-Regular',
    color: 'red',
    textAlign: 'center',
    margin: 80,
    letterSpacing: 3,
  },
  body: {
    backgroundColor: colors.black,
  },
});
