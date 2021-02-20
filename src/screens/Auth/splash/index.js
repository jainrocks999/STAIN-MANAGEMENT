import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Headertext from '../../../component/Headertext';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import StatusBar from '../../../component/StatusBar';
import {useDispatch, useSelector, connect} from 'react-redux';
import Toast from 'react-native-simple-toast';
import TitleText from '../../../component/TitleText';

import moment from 'moment';
import axios from 'axios';
import Modal from 'react-native-modal';
import Loader from '../../../component/loader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SplashScreen = () => {
  const navigation = useNavigation();
  const isFetching = useSelector((state) => state.isFetching);
  const SubscribeDetails = useSelector((state) => state.GetSubscribeDetails);
  const VersionDetails = useSelector((state) => state.VersionDetails);
  const notificationDetails = useSelector((state) => state.NotificationDetails);
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //navigation.navigate('Home');
    getstainpage();
    appVersion();
    notification();
    apiCall();
    getSubscribeDetail();
    loadData();
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    //setModalVisible(true);
  };

  const loadData = async () => {
    dispatch({
      type: 'User_Stain_Request',
      url: 'v1/stain/all',
    });
  };
  const getstainpage = () => {
    dispatch({
      type: 'User_StainPages_Request',
      url: 'v1/stain/stain_pages',
    });
  };
  const notification = async () => {
    dispatch({
      type: 'User_Notification_Request',
      url: 'v1/stain/stain_notifications',
    });
  };

  const appVersion = async (url) => {
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'multipart/form-data',
          Accept: 'multipart/form-data',
        },
        url: 'https://staincarepro.com/wp-json/wp/v1/app/vesion',
      });
      if (response.data.android_version > 1) {
        toggleModal();
      } else {
        directCall();
      }

      AsyncStorage.setItem(
        storage.Android_Version,
        response.data.android_version,
      );
      AsyncStorage.setItem(storage.ios_Version, response.data.ios_version);
    } catch (error) {
      throw error;
    }
  };
  const apiCall = async () => {
    await fetch(
      'https://staincarepro.com/wp-json/wp/v1/app/vesion',
    ).then((res) => res.json());
    // .then((response) => setVersion(response));
  };
  const directCall = async () => {
    let Username = await AsyncStorage.getItem(storage.Username);
    let noti = await AsyncStorage.getItem(storage.notificationID);
    if (Username == null) {
      setTimeout(() => navigation.replace('Login'), 1000);
    } else {
      const currentDate = moment().format('MMM-DD-YYYY hh:mm:ss');
      setTimeout(() => navigation.replace('Home'), 1000);
    }
  };

  const getSubscribeDetail = async () => {
    let userId = await AsyncStorage.getItem(storage.UserId);
    dispatch({
      type: 'User_SubScribeDetails_Request',
      url: `v1/user/get_subscribe_detail?user_id=${userId}`,
    });
  };

  return (
    <View style={styles.MainView}>
      {isFetching ? <Loader /> : null}
      <View style={styles.header}></View>
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <View style={styles.SecondView}>
          {/* <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} /> */}
          <Image
            style={styles.logo}
            source={require('../../../assets/Images/stain.png')}
          />

          {/* 
          <View style={{marginTop: 8}}>
            <TitleText
              title={'Interactive Stain App For Hard Porous Surfaces'}
              color={'#000'}
              fontSize={13}
            />
          </View> */}
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/Images/surphce.jpg')} />
        </View>
      </ImageBackground>
      <StatusBar />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="right"
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modal}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Update
            </Text>
          </View>
          <TouchableOpacity style={styles.ModelmsgView}>
            <Text style={styles.ModelMsgText}>{'New Update Available'}</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: wp('100%'),
            }}>
            <TouchableOpacity style={styles.popup} onPress={toggleModal}>
              <Text style={styles.ModelBtntext}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popup} onPress={directCall}>
              <Text style={styles.ModelBtntext}>Later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SplashScreen;
