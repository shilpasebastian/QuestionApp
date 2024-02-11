import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {getMethod} from '../../api/appAPI';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/reducer';

const Home = props => {
  const [data, setData] = useState('');
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    getMethod(response);
  }, []);
  const response = data => {
    console.log(JSON.stringify(data.data.products[0].title));
  };
  return (
    <View>
      <Text>{props?.route?.params?.email}</Text>
      <Text style={{paddingHorizontal:20}}>{counter}</Text>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
