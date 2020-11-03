import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Alert,
  BackHandler
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';
import Toast from "react-native-simple-toast";
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../../../component/loader';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';

const ChangePassword = () => {
  const navigation = useNavigation();
  const [oldPassword,setOldPassword] = useState('');
  const [userId,setUserId] = useState('');
  const [newPassword,setNewPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const dispatch=useDispatch();
  const isFetching=useSelector(state=>state.isFetching)
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);


  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
const loadData=async()=>{
  const userId1=await AsyncStorage.getItem(storage.UserId)
  setUserId(userId1)
  if(oldPassword==''){
     Toast.show('Please enter old password')
  }
  else if(newPassword==''){
      Toast.show('Please enter  new Password')
  }
  else if(confirmPassword==''){
    Toast.show('Please Confirm Password')
   }
  else{
   dispatch({
     type:'User_Change_Password_Request',
     url:'v1/user/change_password',
     Old: oldPassword,
     New:newPassword,
     Confirm:confirmPassword,
     Id:userId
   })
  }
}
  return (
    <View style={{flex: 1}}>
      <CustomHeader/>
      {isFetching?<Loader/>:null}
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
              placeholder="Old Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text)=>setOldPassword(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="New Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text)=>setNewPassword(text)}
            />
             <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(text)=>setConfirmPassword(text)}
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
