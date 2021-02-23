import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './style';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import StatusBar from '../../../component/StatusBar';
import {useDispatch, useSelector} from 'react-redux';

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
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getstainpage();
    appVersion();
    notification();
    apiCall();
    getSubscribeDetail();
    loadData();
    //CustomfontSize();
    loadData1();
  }, []);
  const CustomfontSize = async () => {
    let smallFont = '1%';
    let largeFont = '2.5%';
    let mediumFont = '3%';
    await AsyncStorage.setItem(storage.small, smallFont);
    await AsyncStorage.setItem(storage.large, largeFont);
    await AsyncStorage.setItem(storage.medium, mediumFont);
  };
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

  const loadData1 = async () => {
    dispatch({
      type: 'User_CaseStudy_Request',
      url: 'v1/stain/case_studies',
    });
  };

  return (
    <SafeAreaView style={styles.MainView}>
      {isFetching ? <Loader /> : null}
      <View style={styles.header}></View>
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <View style={styles.SecondView}>
          {/* <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} /> */}
          <View
            style={{
              height: hp('10%'),
              width: wp('45%'),
              marginTop: hp('1%'),
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require('../../../assets/Images/stain.png')}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
              source={require('../../../assets/Images/surphce.jpg')}
            />
          </View>
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
    </SafeAreaView>
  );
};

export default SplashScreen;
