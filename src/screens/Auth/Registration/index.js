import React, { useEffect, useState } from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View,StatusBar, BackHandler,ScrollView} from 'react-native';


import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import { useDispatch,useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';


const Registration =()=> {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [LastName, setLastName] = useState('')
  const dispatch=useDispatch()
  const isFetching=useSelector(state=>state.isFetching)

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
   

  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}

 
 const doRegister = async() => {

  const Password= await AsyncStorage.getItem(storage.Password)
  console.log(Password);
    if(Username==''){
      Toast.show('Please Enter Username')
    }
    else if(Email==''){
      Toast.show('Please Enter Email')
    }
    else if(Password==''){
      Toast.show('Please Enter Password')
    }
    else if(Name==''){
      Toast.show('Please Enter Name')
    }
    else if(LastName==''){
      Toast.show('Please Enter LastName')
    }
    else{
    dispatch({
      type: 'User_Register_Request',
      url: 'v1/user/register',
      Username,
      Email,
      Password,
      Name,
      LastName,
      props:navigation
    })
    }
  };

  return (
    <View style={{flex:1}}>
<CustomHeader/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}>
             <ScrollView contentContainerStyle={{ flexGrow:1, paddingHorizontal:20,paddingBottom:30,justifyContent:'center'}}>
            <View style={styles.textInputContainer}>
            <Text style={styles.SignIn}>Sign Up </Text>
            <TextInput 
            style={styles.textInput}
            placeholder=' Username'
            placeholderTextColor='grey'
            onChangeText={(text)=>setUsername(text)}
            />
             <TextInput 
            style={styles.textInput}
            placeholder=' Email'
            placeholderTextColor='grey'
            onChangeText={(text)=>setEmail(text)}
            />
             <TextInput 
            style={styles.textInput}
            placeholder=' Password'
            placeholderTextColor='grey'
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput 
            style={[{width:'49%'},styles.textInput]}
            placeholder=' Name'
            placeholderTextColor='grey'
            onChangeText={(text)=>setName(text)}
            />
           
           <TextInput 
            style={[{width:'49%'},styles.textInput]}
            placeholder=' Lastname'
            placeholderTextColor='grey'
            onChangeText={(p)=>setLastName(p)}
            />
            </View>
            </View>
          

          <TouchableOpacity style={styles.button}
          onPress={doRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            </ScrollView>
          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      </View>
  );
}

export default Registration;
