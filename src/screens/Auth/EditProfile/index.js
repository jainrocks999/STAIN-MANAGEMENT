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
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';

const EditProfile = () => {
  const navigation = useNavigation();
  const [name,setName]=useState('')
  const [lastname,setLastname]=useState('')
  const [website,setWebsite]=useState('')
  const dispatch=useDispatch();
  useEffect(()=>{
    
  })
const loadData=()=>{
  if(name==''){
    Toast.show('Please Enter name')
  }
  else if(lastname==''){
    Toast.show('Please Enter Lastname')
  }
  else 
  dispatch({
   type:'User_Edit_Profile_Request',
   url:'v1/user/edit_profile',
   name,
   lastname,
  })
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
            placeholder=' Name'
            placeholderTextColor='grey'
            onChangeText={(text)=>setName({name:text})}
            />
            <TextInput 
            style={styles.textInput}
            placeholder=' Lastname'
            placeholderTextColor='grey'
            onChangeText={(text)=>setLastname({lastname:text})}
            />
            </View>         
          <TouchableOpacity style={styles.button}
           onPress={loadData}
          >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>  
  </View>
  );
};

export default EditProfile

