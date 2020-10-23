import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import AsyncStorage from '@react-native-community/async-storage';
import { call } from 'react-native-reanimated';

const EditProfile = () => {
  const navigation = useNavigation();
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  useEffect(()=>{
     call();
  })

  const call=async()=>{
    const Username = await AsyncStorage.getItem(storage.Username);
    setUsername(Username)
    const Password = await AsyncStorage.getItem(storage.Password);
    setPassword(Password)
  }
  return (
    <View style={{flex: 1}}>
      <CustomHeader/>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        
        <View style={styles.logoContainer}>
           <Text style={styles.subHeading}>Edit Your Profile</Text>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder=' Username'
            value={username}
            placeholderTextColor='grey'
            onChangeText={(text)=>setUsername({username:text})}
            />
            <TextInput 
            style={styles.textInput}
            placeholder=' Password'
            value={password}
            placeholderTextColor='grey'
            keyboardType={"number-pad"}
            onChangeText={(text)=>setPassword({password:text})}
            />
            </View>         
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>  
  </View>
  );
};

export default EditProfile

