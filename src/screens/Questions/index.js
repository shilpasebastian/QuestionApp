import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addQuestion} from '../../api/appAPI';
import {useSelector} from 'react-redux';
import {styles} from './style';
import Snackbar from 'react-native-snackbar';

const AskQuestions = props => {
  const [question, setQuestion] = useState('');
  const [describe, setDescribe] = useState('');
  const token = useSelector(state => state.token.token);

  const getQuestion = text => {
    setQuestion(text);
  };

  const getDescribe = text => {
    setDescribe(text);
  };

  const submit = () => {
    if (question.trim() === '' || describe.trim() === '') {
      Snackbar.show({
        text: 'Plaese Enter the Details',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
        textColor: 'white',
      });
    } else {
      addQuestion(question, describe, response, token);
      //console.log(response.data.data.user.email);
    }
  };

  const response = data => {
    console.log(data);
    Snackbar.show({
      text: 'Add SuccessFully',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: 'green',
      textColor: 'white',
    });
    props.navigation.goBack();
  };

  function headerRender() {
    return (
      <>
        <View style={styles.Header}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
              marginTop: 30,
            }}>
            Ask a question about the course
          </Text>
        </View>
      </>
    );
  }

  function renderInputs() {
    return (
      <View style={{marginHorizontal: 20}}>
        <Text
          style={{
            color: 'black',
            fontSize: 17,
            marginTop: 50,
            fontFamily: 'Poppins-SemiBold',
          }}>
          questions
        </Text>
        <TextInput
          style={{
            height: 65,
            backgroundColor: '#FAFAFA',
            color: 'black',
            fontFamily: 'Poppins-Regular',
            borderRadius: 10,
            marginTop: 15,
          }}
          placeholderTextColor={'grey'}
          onChangeText={getQuestion}
        />

        <Text
          style={{
            color: 'black',
            fontSize: 17,
            marginTop: 20,
            fontFamily: 'Poppins-SemiBold',
          }}>
          describe your question
        </Text>
        <TextInput
          style={{
            height: 120,
            backgroundColor: '#FAFAFA',
            color: 'black',
            fontFamily: 'Poppins-Regular',
            borderRadius: 10,
            marginTop: 15,
          }}
          placeholderTextColor={'grey'}
          onChangeText={getDescribe}
        />
      </View>
    );
  }

  function button() {
    return (
      <>
        <TouchableOpacity style={styles.Button} onPress={submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={styles.mainView}>
      {headerRender()}
      {renderInputs()}
      {button()}
    </View>
  );
};
export default AskQuestions;
