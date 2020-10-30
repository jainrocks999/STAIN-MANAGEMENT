import React, { useState } from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View,Alert,StatusBar,ActivityIndicator} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../../component/loader';
import styles from './style';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';

const LoginScreen = ({route}) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const dispatch=useDispatch();
  const isFetching=useSelector(state=>state.isFetching)


   const doLogin =async() => {
    //  await AsyncStorage.setItem(storage.Username,Username);
      await AsyncStorage.setItem(storage.Password,Password);   
    if (Username == '') {
     Toast.show('Please Enter Username')
    } else if (Password == '') {
      Toast.show('Please Enter Password')
    } else {   
      dispatch({
        type: 'User_Login_Request',
        url: 'v1/user/login',
        Username,
        Password,
        props:navigation
      });
    }
  };
  return (
    <View style={{flex:1}}>
        <CustomHeader/>
        {isFetching?<Loader/>:null}
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.logoContainer}>
           <Text style={styles.subHeading}>Member Login</Text>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder=' Username'
            placeholderTextColor='grey'
            onChangeText={(text)=>setUsername(text)}
            />
            <TextInput 
            style={styles.textInput}
            placeholder=' Password'
            placeholderTextColor='grey'
            secureTextEntry={true}
            onChangeText={(p)=>setPassword(p)}
            />
            </View>
          <View style={styles.checkboxContainer}>
          <View style={{backgroundColor:"#fff"}}> 
             <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            boxType= 'square'
            onFillColor='red'
            onTintColor= '#fffff'
          />
          </View>
          <Text style={styles.checkbox}>Keep me logged in</Text>
          </View>

          <TouchableOpacity style={styles.button}
          onPress={doLogin}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <View>
             
          <TouchableOpacity style={{marginTop:10}} 
          onPress={()=>navigation.navigate('Register')}>
            <Text style={{fontSize:19,color:colors.darkOrange}}>Register Now</Text>
          </TouchableOpacity>
          </View>
          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
      </View>
  );
}

export default LoginScreen
