import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
  Platform
} from 'react-native';
import Axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../../../component/storage';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';
import TitleText from '../../../component/TitleText';
import Headertext from '../../../component/Headertext';
import CustomButton from '../../../component/Button';
import StaticBar from '../../../component/StatusBar';
import DeviceInfo from 'react-native-device-info';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';
import { set } from 'react-native-reanimated';
import { StackActions } from '@react-navigation/native';
let pusToken=null
class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleCheckBox: '',
      Username: '',
      Password: '',
      url: '',
      btn: '',
      msg: '',
      isVisible: false,
      msg_text: '',
      button_text: '',
      Wrong: '',
      spinner: false,
      token:''
    };
    this.keepmevalue();
    this.loadToken()
  }
  async componentDidMount(){
    
    await messaging().registerDeviceForRemoteMessages();
     pusToken = await messaging().getToken();
  console.log('message',pusToken)
  }
  
  loadToken=async()=>{
    const navigation=this.props
  PushNotification.configure({
    onRegister: function (token) {
     // pusToken=token.token
    },
   
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      PushNotification.localNotification({
        title:notification.title, 
        message: notification.message,
        // onOpen: () => { this.props.navigation.navigate("Notifications") },
      });
      // navigation.navigate('Notifications')
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
      onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
      // this.props.navigation.navigate('Notifications')
    },
      onRegistrationError: function(err) {
      console.error(err.message, err);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
 }

  keepmevalue = async () => {
    let Username = await AsyncStorage.getItem(storage.rememberUserName);
    let Pass = await AsyncStorage.getItem(storage.rememberuserpass);
    this.setState({
      Username: Username,
      Password: Pass,
    });

  };
  keepme = async (newValue) => {
    this.setState({
      toggleCheckBox: newValue,

    });
  };
  dolink = async () => {

    await Linking.openURL('https://backstage.surphaces.com/subscription/');
    // this.setState({
    //   isVisible: false
    // })
  };

  loginbtn = async () => {
    const { Username, Password } = this.state;
   const device_type=Platform.OS=='android'?'Android':'Ios'
   const device_id=DeviceInfo.getDeviceId();
   const fcm_token=pusToken
   console.log('cheking',device_id,device_type,fcm_token)
    this.setState({
      spinner: true
    })
    const data = new FormData();
    data.append('username', Username);
    data.append('password', Password);
    data.append('device_id', device_id);
    data.append('fcm_token', fcm_token);
    data.append('device_type',device_type)
    const headers = {
      'content-type': 'multipart/form-data',
      Accept: 'multipart/form-data',
    }
    Axios.post('https://backstage.surphaces.com/wp-json/wp/v1/user/login',
      data,
      { headers }
    ).then(p => {

      const formatRes = JSON.parse(p.data);

      if (formatRes.status == "true") {

        if (formatRes.url == "") {
          AsyncStorage.setItem(storage.Email, formatRes.email);
          AsyncStorage.setItem(storage.Name, formatRes.name);
          AsyncStorage.setItem(storage.UserId, JSON.stringify(formatRes.user_id))
          AsyncStorage.setItem(storage.Lastname, formatRes.lastname);
          AsyncStorage.setItem(storage.Username, formatRes.username);
          this.setState({
            spinner: false
          })
          Toast.show('Login Sucessful');
          this.props.navigation.replace('Home');
        } else {
          AsyncStorage.setItem(storage.Url, formatRes.url);
         
          this.setState({
            isVisible: true,
            msg_text: formatRes.msg_text,
            Url: formatRes.url,
            button_text: formatRes.button_text,
            spinner: false,

          });
        }

      } else {
        Toast.show(formatRes.message)
       // Toast.show('Please Enter Valid Username and Password');
        // setspinner(false)
        this.setState({
          spinner: false
        })
      }
    }).catch(Error);

  }

  doLogin = async () => {
    const { Username, Password, url, btn, msg, toggleCheckBox, isVisible } = this.state;
    if (Username == '') {
      Toast.show('Please Enter Username');
    } else if (Password == '') {
      Toast.show('Please Enter Password');
    } else {

      if (this.state.toggleCheckBox == true) {
        await AsyncStorage.setItem(storage.rememberUserName, Username);
        await AsyncStorage.setItem(storage.rememberuserpass, Password);

        this.loginbtn();
      } else {
        this.setState({
          Username: Username,
          Password: Password,
        });
        this.loginbtn();
      }
    }
  }
  render() {
    const { Username, Password, url, btn, msg, toggleCheckBox, isVisible } = this.state;
    const {SubscribeDetails}=this.props
    return (
      <View style={styles.MainView}>
        <View style={styles.header}></View>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{ color: 'white' }}
        />
        <ImageBackground
          style={styles.MainView}
          source={require('../../../assets/Images/AppBackground.jpg')}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <View
              style={styles.SecondView}>
              <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
              <Image
                style={styles.logo}

                source={require('../../../assets/Images/stain.png')}
              />
              <View style={{ height: 30, justifyContent: 'center', alignContent: 'center' }}>
                <Image
                  style={styles.logo1}
                  source={require('../../../assets/Images/stain_text.png')}
                />
              </View>
              {/* <TitleText title={'STAIN CARE PRO'.toUpperCase()} color={'#9E3B22'} fontSize={26} />
              <View style={{marginTop:8}}>
              <TitleText title={'Interactive Stain App For Hard Porous Surfaces.'} color={'#000'} fontSize={14} />
            </View> */}
              <View style={{ marginTop: 8 }}>
                <TitleText title={'Interactive Stain App For Hard Porous Surfaces'} color={'#000'} fontSize={13} />
              </View>
              <View style={{ marginTop: 30 }}>
                <Headertext title={'Login'} color={'#9E3B22'} fontSize={18} />
              </View>
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                value={Username}
                placeholderTextColor={colors.textGrey}
                onChangeText={(text) =>
                  this.setState({
                    Username: text,
                  })}
              />
              <TextInput
                style={styles.textInput}
                value={Password}
                placeholder="Password"
                placeholderTextColor={colors.textGrey}
                secureTextEntry={true}
                onChangeText={(p) =>
                  this.setState({
                    Password: p,
                  })}
              />
            </View>
            <View
              style={styles.ViewMiddle}>
              <Text
                onPress={() => {
                  this.props.navigation.navigate('ForgotPassword');
                }}
                style={[styles.checkbox, { color: '#0058FF', alignSelf: 'center' }]}>
                Forgot Password?
              </Text>
            </View>
            <View style={styles.checkboxContainer}>
              <View style={{ marginRight: 4, height: 25, width: 30 }}>
                <CheckBox
                  style={{ height: '90%', width: '90%' }}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => this.keepme(newValue)}
                  boxType="square"
                  onFillColor="orange"
                />
              </View>
              <Text style={styles.checkbox}>Keep me logged in</Text>
            </View>

            <CustomButton title="Login" onPress={this.doLogin} />
            <View style={{ justifyContent: 'center', alignSelf: 'center',marginTop:5 }}>
              <TouchableOpacity
                style={{ marginVertical: 10, justifyContent: 'center', alignSelf: 'center' }}
                onPress={this.dolink}>
                <Text style={{ fontSize: 19, color: colors.darkOrange }}>
                  Register Now
                </Text>
              </TouchableOpacity>

              <View style={styles.logoContainer}>
                <Image

                  source={require('../../../assets/Images/surphce.jpg')}
                />
              </View>

            </View>
            <Modal
              isVisible={this.state.isVisible}
              onSwipeComplete={() =>
                this.setState({
                  isVisible: false,
                })
              }
              swipeDirection="right"
              onBackdropPress={() =>
                this.setState({
                  isVisible: false,
                })}>
              <View style={styles.modal}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignItems: 'center',
                  }}>
                  Subscribe Alert
                </Text>
                <View
                  style={styles.ModelmsgView}>
                  <Text
                    style={styles.ModelMsgText}>
                    {this.state.msg_text}
                  </Text>
                </View>

                <TouchableOpacity style={styles.popup} onPress={this.dolink}>
                  <Text
                    style={styles.ModelBtntext}>
                    {this.state.button_text}
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
            {/* <View style={styles.logoContainer1}>
              <Image
                source={require('../../../assets/Images/logo.png')}
              />
            </View> */}
          </ScrollView>

        </ImageBackground>
        <StaticBar />
      </View>
    )

  }


};
const mapStateToProps = (state) => {

  return {
    isFetching: state.isFetching,
    UserDetails: state.UserDetails,
    SubscribeDetails:state.GetSubscribeDetails
  };
};
export default connect(mapStateToProps)(LoginScreen);
