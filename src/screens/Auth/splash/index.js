import React, { useEffect, useState } from 'react';
import {Image, ImageBackground, View,StatusBar, Alert} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import pac from '../../../../package.json';
const SplashScreen =()=> {
  const navigation = useNavigation();
  const [version,setVersion]=useState('')
  useEffect(() => {
    directCall()
    apiCall()
     },[]);
  const directCall=async()=>{
      const Username = await AsyncStorage.getItem(storage.Username);
      const Password = await AsyncStorage.getItem(storage.Password);
        if (Password&&Username) {
          setTimeout(() => navigation.navigate('Home'), 2000);
        } else {
          setTimeout(() => navigation.navigate('Login'), 2000);
        }
     }
  const apiCall=async()=>{
 await fetch('https://backstage.surphaces.com/wp-json/wp/v1/app/vesion').
 then(res=>res.json()).
 then(response=>setVersion(response))
  }
  return (
    <View style={{flex:1}}>
          <ImageBackground

style={styles.imageBackground}
source={require('../../../assets/Images/HomeScreen.png')}
>
<CustomHeader/>
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
