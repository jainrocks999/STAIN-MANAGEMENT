import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/header';
import colors from '../../../component/colors';
import Toast from 'react-native-simple-toast';
import Loader from '../../../component/loader';
import {useDispatch, useSelector} from 'react-redux';
import TitleText from '../../../component/TitleText';
import CustomButton from '../../../component/Button';
import StatusBar from '../../../component/StatusBar';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.isFetching);

  const loadData = () => {
    if (email == '') {
      Toast.show('Please enter Email');
    } else {
      dispatch({
        type: 'User_Forgot_Password_Request',
        url: 'v1/user/forgot_password',
        Email: email,
      });
    }
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView
          contentContainerStyle={styles.scrollview}>
          <View style={styles.logoContainer}>
            <Image              
              source={require('../../../assets/Images/logo.png')}
            />
          </View>
          <View style={styles.logoContainer}>
            <TitleText title={'Forgot Password'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Enter email"
              placeholderTextColor={colors.textGrey}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <CustomButton title='SEND' onPress={loadData} />
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
    </View>
  );
};

export default ForgotPassword;
