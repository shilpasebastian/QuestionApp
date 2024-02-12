// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const saveAuthToken = async token => {
//   let myToken = '';

//   if (token != null && token != undefined) {
//     myToken = token;
//   }

//   try {
//     await AsyncStorage.setItem('AUTH_TOKEN', myToken);
//   } catch (error) {}
// };
// export const getAuthToken = async () => {
//   try {
//     const value = await AsyncStorage.getItem('AUTH_TOKEN');
//     if (value) {
//       return value;
//     }
//     return '';
//   } catch (error) {
//     return '';
//   }
// };
