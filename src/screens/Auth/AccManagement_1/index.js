import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../component/colors';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import storage from '../../../component/storage';
import { useSelector } from 'react-redux';

const AccManagement_1 = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  console.log(email);
  useEffect(()=>{
     EditData()
  })
  console.log(name);
const EditData=async()=>{
  const name = await AsyncStorage.getItem(storage.Username);
  setName(name)
  const email1=await AsyncStorage.getItem(storage.Email)
  setEmail(email1)
}
  return (
    <View style={{flex: 1}}>
      <CustomHeader
       
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <View style={styles.heading}>
          <Text style={styles.subHeading}>Account Management</Text>
        </View>
        
        <View style={styles.settings}>
          <Text style={styles.SignIn}>Sign-In</Text>
          <Text style={styles.Subscriber}>Already a Subscriber?</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
            }}>
            <Image 
            source={require('../../../assets/Icons/Photo.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
               {name}
              </Text>
              <Text style={styles.Subscriber}>{email}</Text>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder=" Password"
              placeholderTextColor="grey"
            />
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxContainerView}>
              <View style={styles.checkboxContainerView1}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  boxType="square"
                  onFillColor="red"
                  onTintColor="#fffff"
                />
              </View>
              <Text style={styles.checkbox}>Show Password</Text>
            </View>
            <Text onPress={()=>{navigation.navigate('ForgotPassword')}} 
            style={[styles.checkbox,{color:'#0058FF'}]}>Forgot Password?</Text>
          </View>
          <View style={styles.checkboxContainer1}>
          <View style={[styles.checkboxContainerView,{marginTop:'5%'}]}>
            <View style={styles.checkboxContainerView1}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox1}
                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                boxType="square"
                onFillColor="red"
                onTintColor="#fffff"
              />
            </View>
            <Text style={styles.checkbox}>Keep me signed in</Text>
          </View>
          <Text  onPress={()=>navigation.navigate('Edit')} 
          style={[styles.checkbox,{color:'#0058FF'}]}>Edit Profile?</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Change')}>
          <Text 
          style={[styles.checkbox,{textAlign:'center',marginTop:'10%'}]}>
            Change Password
            </Text>
          </TouchableOpacity>
         
        </View>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>  
  </View>
  );
};

export default AccManagement_1
