import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Alert
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from "react-native-simple-toast";
import { useDispatch } from 'react-redux'

const ChangePassword = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  const dispatch=useDispatch();
const loadData=()=>{
  if(email==''){
     Toast.show('Please enter Email')
  }
  else if(email==''){
      Toast.show('Please enter Password')
  }
  else{
   dispatch({
     type:'User_Change_Password_Request',
     url:'v1/user/change_password',
     email
   })
  }
}
  return (
    <View style={{flex: 1}}>
      <CustomHeader/>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <View style={styles.heading}>
          <Text style={styles.subHeading}>Account Management</Text>
        </View> 
        <View style={styles.settings}>
          <Text style={styles.SignIn}>Change Password ?</Text>
          
          <View>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder=" Enter email"
              placeholderTextColor="grey"
              onChangeText={(text)=>setEmail({email:text})}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              value={password}
              placeholder=" Enter Password"
              placeholderTextColor="grey"
              onChangeText={(text)=>setPassword({password:text})}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={loadData}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>

       </View>
      </ImageBackground>
    <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
    </View>
  );
};

export default ChangePassword