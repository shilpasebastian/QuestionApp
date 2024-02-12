import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {getMethod} from '../../api/appAPI';
import {useSelector} from 'react-redux';
import {strings} from '../../utils/strings';
import {styles} from './style';

const Home = props => {
  const [data, setData] = useState([]);
  const token = useSelector(state => state.token.token);
  useEffect(() => {
    console.log(token);
    getMethod(response, token);
  }, [token]);
  const response = data => {
    console.log(data);
    setData(data?.data?.results ?? []);
  };

  function headerRender() {
    return (
      <>
        <View style={styles.homeHeader}>
          <Text style={styles.homeHeaderText}>{strings.home.homeText}</Text>
          <TouchableOpacity style={styles.homeHeaderBotton}>
            <Text style={styles.homeHeaderBottonText}>
              {strings.home.Logout}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  function headerBody() {
    return (
      <>
        <Text style={styles.homebBodyText}>{strings.home.bodyText}</Text>
        <Text style={styles.homebBodySubText}>{strings.home.bodySubText}</Text>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => props.navigation.navigate('Ask Questions')}>
          <Text style={styles.homeButtonText}>
            {strings.home.bodySubBotton}
          </Text>
        </TouchableOpacity>
      </>
    );
  }

  function listView() {
    return (
      <View style={{flex: 1, marginTop: 30}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{marginHorizontal: 20}}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <Text style={styles.renderText}>{item.title}</Text>

        <Text style={styles.decriptionText}>{item.description}</Text>
        <View style={styles.countView}>
          <Text style={styles.countText}>{item.answers_count} answers</Text>
          <Text style={styles.commentText}>Comments</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.home}>
      {headerRender()}
      {headerBody()}
      {listView()}
    </View>
  );
};

export default Home;
