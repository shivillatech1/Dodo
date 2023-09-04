import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default class Api {
  //   static baseUrl = 'http://13.233.229.68:8008/';
}
// export const onGetUserApi = async () => {
// //   const id = await AsyncStorage.getItem('token');
//   const url = Api.baseUrl + `user/get/${id}`;

//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       })
//       .then(res => resolve(res))
//       .catch(err => reject(err));
//   });
// };

// export const LoginScreenApi = async responseData => {
//   const url = Api.baseUrl + `user/login`;
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, responseData, {
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       })
//       .then(res => resolve(res))
//       .catch(err => reject(err));
//   });
// };
