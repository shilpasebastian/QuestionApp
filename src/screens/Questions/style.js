import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {backgroundColor: 'white', flex: 1},
  Header: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#4B68FF',
    height: 60,
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  submitText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
  },
});
