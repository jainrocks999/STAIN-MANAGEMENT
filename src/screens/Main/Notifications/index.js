import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import styles from './style';
import {connect, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import TitleText from '../../../component/Headertext';
import StaticText from '../../../component/StaticText';

import BottomTab from '../../../component/BottomTab';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';

let arrID = [];
const Notification = () => {
  const navigation = useNavigation();
  const NotificationDetails = useSelector((state) => state.NotificationDetails);
  const dispatch = useDispatch();
  const [notificationData, setnotificationData] = useState([]);

  useEffect(() => {
    setnotificationData(NotificationDetails);

    if (NotificationDetails == '') {
    } else {
      AsyncStorage.setItem('ViewNotificationId', NotificationDetails[0].id);
    }
    dispatch({
      type: 'User_Notification_Request',
      url: 'v1/stain/stain_notifications',
    });
  }, []);
  const notification = async () => {};

  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <TitleText title={'Notifications'} color={'#9E3B22'} fontSize={22} />
        <FlatList
          style={{marginTop: 10}}
          data={NotificationDetails}
          renderItem={({item}) => (
            <View
              style={{
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowRadius: 8,
                shadowOffset: {height: 2, width: 0},
                elevation: 5,
                borderRadius: 10,
                backgroundColor: 'white',
                // height:100,
                marginHorizontal: 10,
                marginVertical: 3,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}>
              <Text style={{color: 'green', marginTop: 8}}>{item.title}</Text>
              <Text style={{marginTop: 7}}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </View>
  );
};

export default connect()(Notification);
