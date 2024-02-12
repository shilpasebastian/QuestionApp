import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 35,
  },
  loginText: {
    fontSize: 40,
    textAlign: 'left',
    color: 'black',
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  emailText: {
    color: 'black',
    fontSize: 17,
    marginTop: 50,
    fontFamily: 'Poppins-SemiBold',
  },

  passwordText: {
    color: 'black',
    fontSize: 17,
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold',
  },

  bottomText: {
    color: 'grey',
    fontSize: 15,
    marginTop: 30,
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    height: 65,
    backgroundColor: '#FAFAFA',
    color: 'black',
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#4B68FF',
    height: 60,
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    backgroundColor: 'white',

    height: 60,
    marginTop: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
  bottomButtonText: {
    color: '#4B68FF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
});
