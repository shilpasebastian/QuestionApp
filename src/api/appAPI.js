import axios from 'axios';
import {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';

export function getMethod(res) {
  axios
    .get('https://dummyjson.com/products')
    .then(function (response) {
      res(response);
      //   setData(response.data.data);
    })
    .catch(function (error) {
      res(error);

      console.log(error);
    });
}

export async function postMethod(email, password) {
  let data = await axios.post(
    'https://api-analyst.iscriptsdemo.com/v1/api/auth/login',
    {
      email: email,
      password: password,
    },
  );
  return data;
}

export function putMethod() {
  axios
    .put('https://jsonplaceholder.typicode.com/posts/1', {
      title: 'Updated Post Title',
      body: 'This is the updated body of the post.',
    })
    .then(function (response) {
      console.log('PUT SUCCESS------   ', JSON.stringify(response));
      Snackbar.show({
        text: 'Success',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'green',
        textColor: 'white',
      });
    })
    .catch(function (error) {
      console.log('ERRORRRR', error);
    });
}

export function deleteMethod() {
  axios
    .delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      console.log('DELETE SUCCESS------   ', JSON.stringify(response));
      Snackbar.show({
        text: 'Success',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'green',
        textColor: 'white',
      });
    })
    .catch(function (error) {
      console.log('ERRORRRR', error);
    });
}
