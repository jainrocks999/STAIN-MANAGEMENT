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
import CustomButton from '../../../component/Button';
import StaticBar from '../../../component/StatusBar';

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
    };
    this.keepmevalue();
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

    await Linking.openURL(this.state.Url);
    this.setState({
      isVisible: false
    })
  };

  loginbtn = async () => {
    const { Username, Password } = this.state;

    this.setState({
      spinner: true
    })
    const data = new FormData();
    data.append('username', Username);
    data.append('password', Password);
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
        Toast.show('Please Enter Valid Username and Password');
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
              <View style={styles.logoContainer}>
              <TitleText title={'Fred Hueston’s'} color={'#000'} fontSize={16}  />
                <Image
                  style={styles.logo}
                  source={require('../../../assets/Images/stain.png')}
                />
                 <TitleText title={'STAIN CARE PRO'.toUpperCase()} color={'#9E3B22'} fontSize={22}  />
                 <TitleText title={'Interactive Stain App For Hard Porous Surfaces'}  color={'#000'} fontSize={16} />
                 <TitleText title={'Login'.toUpperCase()} color={'#9E3B22'} fontSize={22}/>
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
                  style={[styles.checkbox, { color: '#0058FF' }]}>
                  Forgot Password?
              </Text>
              </View>
              <View style={styles.checkboxContainer}>
                <View style={{ marginRight: 10, height: 30, width: 30 }}>
                  <CheckBox
                    style={{ height: '100%', width: '100%' }}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => this.keepme(newValue)}
                    boxType="square"
                    onFillColor="orange"
                  />
                </View>
                <Text style={styles.checkbox}>Keep me logged in</Text>
              </View>

              <CustomButton title="LOGIN" onPress={this.doLogin} />
              <View>
                <TouchableOpacity
                  style={{ marginVertical: 10 }}
                  onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={{ fontSize: 19, color: colors.darkOrange }}>
                    Register Now
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.logoContainer}>
               <Image
             
              source={require('../../../assets/Images/logo.png')}
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
  };
};
export default connect(mapStateToProps)(LoginScreen);
