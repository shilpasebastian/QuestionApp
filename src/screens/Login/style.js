import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 22,
  },
  headerImage: {width: 100.36, height: 40},
  loginText: {
    fontSize: 25,
    textAlign: 'left',
    color: 'black',
    marginTop: 64,
    fontFamily: 'Poppins-Medium',
  },
  textInput: {
    height: 65,
    backgroundColor: '#FAFAFA',
    color: 'black',
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
  },
  passwordContainer: {marginTop: 38},
  eyeContainer: {
    position: 'absolute',
    right: 10,
    top: 27,
  },
  eyeImage: {
    width: 18.16,
    height: 13.62,
  },
  loginButton: {
    backgroundColor: '#4B68FF',
    height: 60,
    marginTop: 65,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
});
