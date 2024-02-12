import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  home: {backgroundColor: '#d3d3d3', flex: 1},
  homeHeader: {
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeHeaderText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  homeHeaderBotton: {width: 90, height: 30, backgroundColor: 'grey'},
  homeHeaderBottonText: {
    color: 'black',
    textAlign: 'center',

    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    paddingVertical: 5,
  },
  homebBodyText: {
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  homebBodySubText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  homeButton: {
    backgroundColor: '#4B68FF',
    height: 55,
    marginHorizontal: 30,
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  renderView: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 10,
  },
  renderText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  decriptionText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
  },
  countView: {flexDirection: 'row', justifyContent: 'space-between'},
  countText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
  },
  commentText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
  },
});
