import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {strings} from '../../utils/strings';
import Snackbar from 'react-native-snackbar';
import {login} from '../../api/appAPI';
import {useDispatch} from 'react-redux';
import {getToken} from '../../redux/reducer';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const dispatch = useDispatch();

  const emailValidation = text => {
    setEmail(text);
  };

  const passwordValidation = text => {
    setPassWord(text);
  };

  const checkValidation = () => {
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
      login(email, password, response);
      props.navigation.navigate('Home');
    }
  };

  const response = data => {
    console.log(data);
    if (data?.data?.access_token !== null) {
      console.log('token', data?.data?.access_token?.token);
      dispatch(getToken(data?.data?.access_token?.token));
    }
  };

  function renderHeader() {
    return (
      <>
        <Text style={styles.loginText}>{strings.constant.Header}</Text>
      </>
    );
  }

  function renderInputs() {
    return (
      <>
        <Text style={styles.emailText}>{strings.constant.emailText}</Text>
        <TextInput
          style={[styles.textInput, {marginTop: 15}]}
          placeholder={strings.constant.email}
          placeholderTextColor={'grey'}
          onChangeText={emailValidation}
        />

        <Text style={styles.passwordText}>{strings.constant.passwordText}</Text>
        <TextInput
          style={[styles.textInput, {marginTop: 15}]}
          secureTextEntry={true}
          placeholder={strings.constant.password}
          placeholderTextColor={'grey'}
          onChangeText={passwordValidation}
        />
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

  function bottomText() {
    return (
      <>
        <Text style={styles.bottomText}>{strings.constant.bottomText}</Text>
      </>
    );
  }

  function bottomButton() {
    return (
      <>
        <TouchableOpacity style={styles.bottomButton} onPress={checkValidation}>
          <Text style={styles.bottomButtonText}>
            {strings.constant.bottomBottonText}
          </Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderInputs()}
      {button()}
      {bottomText()}
      {bottomButton()}
    </View>
  );
};

export default Login;
