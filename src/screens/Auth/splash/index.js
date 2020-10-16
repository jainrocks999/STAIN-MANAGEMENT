import React, { useEffect } from 'react';
import {Image, ImageBackground, View} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';



const SplashScreen =()=> {
  const navigation = useNavigation();
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
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
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(SplashScreen);
