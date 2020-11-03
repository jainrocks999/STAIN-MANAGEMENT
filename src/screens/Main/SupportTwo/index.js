import React, {useEffect, useState } from 'react';
import {Alert, BackHandler, ImageBackground, Text,View} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';



const SupportTwo =()=> {
  const navigation = useNavigation();


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
   

  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
  
  
  return (
    <View style={{flex:1}}>
<CustomHeader onPress ={()=>{Alert.alert('hey')}}/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.headingView}>
           <Text style={styles.heading}>SUPPORT</Text>
            </View>
              <View style={styles.subHeadingView}>
           <Text style={styles.subHeading}>
            App Technical support 
           </Text>
            </View>
          </ImageBackground>
      
      </View>
  );
}

export default SupportTwo
