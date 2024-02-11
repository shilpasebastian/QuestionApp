import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../utils/images';
import {styles} from './style';
import {strings} from '../../utils/strings';
import Snackbar from 'react-native-snackbar';
import {useNavigation} from '@react-navigation/native';
import AppApi, {postMethod} from '../../api/appAPI';

const Login = props => {
  const [isSecure, setSecure] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  // const navigation = useNavigation();

  const onEyeClick = () => {
    setSecure(!isSecure);
  };

  const emailValidation = text => {
    setEmail(text);
  };

  const passwordValidation = text => {
    setPassWord(text);
  };

  const checkValidation = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Snackbar.show({
        text: 'Plaese Enter the Email and Password',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
        textColor: 'white',
      });
    } else {
      Snackbar.show({
        text: 'Login SuccessFully',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'green',
        textColor: 'white',
      });
      //const response = await postMethod(email, password);
      //console.log(response.data.data.user.email);
      props.navigation.navigate('Home', {email: ''});
    }
  };
 

  function renderHeader() {
    return (
      <>
        <Image source={Images.Login.header} style={styles.headerImage} />
        <Text style={styles.loginText}>{strings.constant.login}</Text>
      </>
    );
  }

  function renderInputs() {
    return (
      <>
        <TextInput
          style={[styles.textInput, {marginTop: 33}]}
          placeholder={strings.constant.email}
          onChangeText={emailValidation}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            secureTextEntry={isSecure}
            placeholder={strings.constant.password}
            onChangeText={passwordValidation}
          />
          <TouchableOpacity onPress={onEyeClick} style={styles.eyeContainer}>
            <Image
              style={styles.eyeImage}
              source={isSecure ? Images.Login.view : Images.Login.hide}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function button() {
    return (
      <>
        <TouchableOpacity style={styles.loginButton} onPress={checkValidation}>
          <Text style={styles.logText}>Login</Text>
        </TouchableOpacity>
      </>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderInputs()}
      {button()}
    </View>
  );
};

export default Login;
