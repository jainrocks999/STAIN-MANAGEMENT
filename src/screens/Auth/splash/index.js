//Import Npm 
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import StatusBar from '../../../component/StatusBar';
//create Function
const SplashScreen = () => {
  const navigation = useNavigation();
  const [version, setVersion] = useState('');
  React.useEffect(() => {
    directCall();
    apiCall();
  }, []);
  const directCall = async () => {
    let Username = await AsyncStorage.getItem(storage.Username);

    if (Username == null) {
      setTimeout(() => navigation.replace('Login'), 2000);
    } else {
       setTimeout(() => navigation.replace('Home'), 2000);
    }
  };
  const apiCall = async () => {
    await fetch('https://backstage.surphaces.com/wp-json/wp/v1/app/vesion')
      .then((res) => res.json())
      .then((response) => setVersion(response));
  };
  return (
    <View style={styles.MainView}>
      <View style={styles.header}></View>
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/Images/logo.png')}
          />
        </View>
      </ImageBackground>
      <StatusBar />
    </View>
  );
};

export default SplashScreen;
