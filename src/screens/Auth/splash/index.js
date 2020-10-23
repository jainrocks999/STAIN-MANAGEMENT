import React, { useEffect, useState } from 'react';
import {Image, ImageBackground, View,StatusBar} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';

const SplashScreen =()=> {
  const navigation = useNavigation();
  const [Username1]=useState('robin')
  const [Password1]=useState('123456')

  useEffect(() => {
    directCall()
     });
     const directCall=async()=>{
      const Username = await AsyncStorage.getItem(storage.Username);
      const Password = await AsyncStorage.getItem(storage.Password);
      console.log(Username)
      console.log(Password)
        if (Username==Username1 && Password==Password1) {
          setTimeout(() => navigation.navigate('Home'), 2000);
        } else {
          setTimeout(() => navigation.navigate('Login'), 2000);
        }
     }
  return (
    <View style={{flex:1}}>
          <CustomHeader/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/HomeScreen.png')}
            >
              <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            
            source={require('../../../assets/Images/logo.png')}
            />
            </View>
          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      </View>
  );
}

export default SplashScreen
