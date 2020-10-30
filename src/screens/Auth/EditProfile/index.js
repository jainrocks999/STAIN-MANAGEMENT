import React, {useEffect, useState} from 'react';
import {
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
  const [userId,setUserId]=useState()
  const [username,setUsername]=useState('')
  const [name,setName]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  console.log(userId)
  const dispatch=useDispatch();
  useEffect(()=>{
    EditData();
  })
const EditData=async()=>{
   const username= await AsyncStorage.getItem(storage.Username);
   setUsername(username)
   const email=await AsyncStorage.getItem(storage.Email)
   setEmail(email)
   const name= await AsyncStorage.getItem(storage.Name);
   setName(name)
   const lastname=await AsyncStorage.getItem(storage.Lastname)
   setLastname(lastname)
   const userId=await AsyncStorage.getItem(storage.UserId)
   setUserId(userId)
}
const loadData=async()=>{
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(username==''){
    Toast.show('Please Enter Username')
  }
  else if(name==''){
    Toast.show('Please Enter Name')
  }
  else if(lastname==''){
    Toast.show('Please Enter Lastname')
  }
  else if (email==''){
    Toast.show('Please enter valid email');
  }
  else 
  dispatch({
   type:'User_Edit_Profile_Request',
   url:'v1/user/edit_profile',
   username:username,
   name:name,
   lastname:lastname,
   email:email,
   userId:userId
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
            placeholder='Username'
            value={username}
            editable={true}
            placeholderTextColor='grey'
            onChangeText={text=>setUsername(text)}
            />
            <TextInput 
            style={styles.textInput}
            placeholder='Name'
            value={name}
            placeholderTextColor='grey'
            onChangeText={(text)=>setName(text)}
            />
            <TextInput 
            style={styles.textInput}
            placeholder='Lastname'
            value={lastname}
            placeholderTextColor='grey'
            onChangeText={(text)=>setLastname(text)}
            />
            <TextInput 
            style={styles.textInput}
            placeholder='Email'
            placeholderTextColor='grey'
            value={email}
            editable={false}
            onChangeText={(text)=>setEmail(text)}
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

