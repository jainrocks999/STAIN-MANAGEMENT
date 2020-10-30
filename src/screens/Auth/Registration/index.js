import React, { useState } from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View,StatusBar} from 'react-native';


import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import { useDispatch,useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';


const Registration =()=> {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [LastName, setLastName] = useState('')
  const dispatch=useDispatch()
  const isFetching=useSelector(state=>state.isFetching)

 
 const doRegister = async() => {
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
            
            <View style={styles.textInputContainer}>
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

          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      </View>
  );
}

export default Registration;
