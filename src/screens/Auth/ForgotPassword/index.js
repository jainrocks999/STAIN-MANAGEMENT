import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import TitleText from '../../../component/TitleText';
import TitleText1 from '../../../component/Headertext';
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
    // <View style={styles.imageBackground}>
    //   <CustomHeader />
    //   {isFetching ? <Loader /> : null}
    //   <ImageBackground
    //     style={styles.imageBackground}
    //     source={require('../../../assets/Images/AppBackground.jpg')}>
    //     <ScrollView
    //       contentContainerStyle={styles.scroll}>
    //       <View style={styles.logoContainer1}>
    //         <Image              
    //           source={require('../../../assets/Images/logo.png')}
    //         />


    //         <TitleText title={'Forgot Password'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
    //         </View>
    //       <View style={styles.textInputContainer}>
    //         <TextInput
    //           style={styles.textInput}
    //           value={email}
    //           placeholder="Enter Email"
    //           placeholderTextColor={colors.textGrey}
    //           onChangeText={(text) => setEmail(text)}
    //         />
    //       </View>

    //       <CustomButton title='SEND' onPress={loadData} />
    //     </ScrollView>
    //   </ImageBackground>
    //   <StatusBar/>
    // </View>
    <View style={styles.MainView}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.MainView}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View
            style={styles.SecondView}>
            <TitleText title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/stain.png')}
            />

            <TitleText title={'STAIN CARE PRO'.toUpperCase()} color={'#9E3B22'} fontSize={26} />
              <TitleText title={'Interactive Stain App For Hard Porous Surfaces.'} color={'#000'} fontSize={14} />
        
            <TitleText1 title={'Forgot Password'.toUpperCase()} color={'#9E3B22'} fontSize={20} />
          
          </View>  

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="Enter Email"
              placeholderTextColor={colors.textGrey}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <CustomButton title='SEND' onPress={loadData} />


          <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/Images/logo.png')}
            />
          </View>

         
        </ScrollView>
      
      </ImageBackground>
      <StatusBar />
    </View>
  );
};

export default ForgotPassword;
