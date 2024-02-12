import axios from 'axios';
import {useState, useEffect} from 'react';
import Snackbar from 'react-native-snackbar';
import {useSelector} from 'react-redux';

export function getMethod(res, token) {
  console.log('getmethod', token);
  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  console.log(header);

  axios
    .get('https://portal.learnabble.xyz/api/v2/accounts/me/questions', {
      headers: header,
    })
    .then(function (response) {
      res(response);
      //   setData(response.data.data);
    })
    .catch(function (error) {
      res(error);

      console.log(error);
    });
}

export async function login(email, password, res) {
  axios
    .post('https://portal.learnabble.xyz/api/v2/accounts/login/', {
      email: email,
      password: password,
    })
    .then(function (response) {
      res(response);
      //   setData(response.data.data);
    })
    .catch(function (error) {
      res(error);

      console.log(error);
    });
}

export async function addQuestion(question, describe, res, token) {
  const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(
      'https://portal.learnabble.xyz/api/v2/core/questions/add/',
      {
        question_title: question,
        question_description: describe,
        model: 'course',
        id: 1,
      },
      {
        headers: header,
      },
    )
    .then(function (response) {
      res(response);
      //   setData(response.data.data);
    })
    .catch(function (error) {
      res(error);

      console.log(error);
    });
}
