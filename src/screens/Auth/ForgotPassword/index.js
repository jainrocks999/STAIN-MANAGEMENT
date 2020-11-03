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
import Loader from '../../../component/loader';
import { useDispatch,useSelector } from 'react-redux'

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState('');
  const dispatch=useDispatch();
  const isFetching=useSelector(state=>state.isFetching)


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
   

  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
const loadData=()=>{
  if(email==''){
     Toast.show('Please enter Email')
  }
  else{
   dispatch({
     type:'User_Forgot_Password_Request',
     url:'v1/user/forgot_password',
     Email:email
   })
  }
}
// const validate = (text) => {
//   console.log(text);
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (reg.test(text) === false) {
//     Toast.show("Email is Not Correct");
//    setEmail(text)
//     return false;
//   }
//   else {
//     setEmail(text)
//     console.log("Email is Correct");
//   }
// }
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
          <Text style={styles.SignIn}>Forgot Password ?</Text>
          <View>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Enter email"
              placeholderTextColor="grey"
              onChangeText={(text) =>setEmail(text)}
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

export default ForgotPassword
