import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, TextInput, Linking, TouchableOpacity, View, Alert, StatusBar, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../../component/loader';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';

const LoginScreen = ({ route }) => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [url, seturl] = useState('')
  const [btn, setbtn] = useState('')
  const [msg, setmsg] = useState('')
  const [isVisible, setisVisible] = useState(false)
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching)

  useEffect(() => {
    subscription();
  })

  const subscription = async () => {
    let url = await AsyncStorage.getItem(storage.Url);
    seturl(url)
    let btn = await AsyncStorage.getItem(storage.button_text);
    setbtn(btn)
    let msg = await AsyncStorage.getItem(storage.textvalue);
    console.log('hello jain' + msg)

    setmsg(msg)


  }

  const dolink = async () => {
    console.log('kapil ' + url)
    await Linking.openURL('https://backstage.surphaces.com/subscription/');
  }

  const doLogin = async () => {
    //  await AsyncStorage.setItem(storage.Username,Username);
    await AsyncStorage.setItem(storage.Password, Password);
    console.log('rohit jsi' + Username)
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
        props: navigation
      });
      if (url == null) {
        // Alert.alert('not allow')
      } else {
       setisVisible(true)
      }
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
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
            placeholder='Username'
            placeholderTextColor='grey'
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            placeholderTextColor='grey'
            secureTextEntry={true}
            onChangeText={(p) => setPassword(p)}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <View style={{ backgroundColor: "#fff" }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
              boxType='square'
              onFillColor='red'
              onTintColor='#fffff'
            />
          </View>
          <Text style={styles.checkbox}>Keep me logged in</Text>
        </View>

        <TouchableOpacity style={styles.button}
          onPress={doLogin}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <View>

          <TouchableOpacity style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontSize: 19, color: colors.darkOrange }}>Register Now</Text>
          </TouchableOpacity>
        </View>

        <Modal isVisible={isVisible}
          onSwipeComplete={() => (setisVisible(false))}
          swipeDirection="right"
          onBackdropPress={() => (setisVisible(false))}
        >
          <View
            style={styles.modal}>
            <Text style={{
              color: 'red', fontSize: 20, fontWeight
                : 'bold', alignItems: 'center'
            }}>Subscribe Alert</Text>
            <View style={{ width: '99%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{
                color: 'black', fontSize: 18, fontWeight
                  : '500', alignItems: 'center', padding: 6
              }}>Your subscription plan has been expired,
            Please subscribe again.</Text>
            </View>

            <TouchableOpacity style={styles.popup}
              onPress={dolink}>
              <Text style={{
                color: colors.white,
                fontSize: 14,
                alignSelf: 'center',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: 16,
                textAlign: 'center'
              }}>{btn}</Text>
            </TouchableOpacity>

          </View>
        </Modal>

      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />


    </View>
  );
}

export default LoginScreen
