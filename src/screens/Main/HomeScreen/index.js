import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/HomeHeader2';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../component/colors';
import CustomButton from '../../../component/Button';
import StaticText from '../../../component/StaticText';
import Headertext from '../../../component/Headertext';
import TitleText from '../../../component/TitleText';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    loadData();
    loadData1();
    loadData2();
    loadData3();
  }, []);


  const loadData = async () => {
    dispatch({
      type: 'User_Stain_Request',
      url: 'v1/stain/all',
    });
  };
  const loadData1 = async () => {
    dispatch({
      type: 'User_CaseStudy_Request',
      url: 'v1/stain/case_studies',
    });
  };

  const loadData2 = async () => {
    dispatch({
      type: 'User_App_Request',
      url: 'v1/stain/about_app',
    });
  };
  const loadData3 = async () => {
    dispatch({
      type: 'User_StainPages_Request',
      url: 'v1/stain/stain_pages',
    });
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader />

      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/HomeScreen.png')}>
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
          </View>

          {/* <View style={styles.logoContainer}>
              <TitleText title={'Fred Hueston’s'} color={'#000'} fontSize={16}  />
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/stain.png')}
            />
         

          <TitleText title={'STAIN CARE PRO'.toUpperCase()} color={'#9E3B22'} fontSize={26}  />
            <TitleText title={'Interactive Stain App For Hard Porous Surfaces.'} color={'#000'} fontSize={14} />
            </View> */}
          <View style={styles.buttonContainer}>
            <CustomButton
              title="About Stains"
              onPress={() => {
                navigation.navigate('AboutStains', {
                  btnName: 'About Stains',
                });
              }}
            />
            <CustomButton
              title="Stain Chart"
              onPress={() => {
                navigation.navigate('Stain', {
                  btnName: 'STAIN CHART',
                });
              }}
            />
            <CustomButton
              title="How To Video"
              onPress={() => {
                navigation.navigate('HowTo', {
                  btnName: 'How to Apply a Poultice',
                });
              }}
            />

            <CustomButton
              title="Recommended Supplies"
              onPress={() => {
                navigation.navigate('Recommendedsupply', {
                  btnName: 'Supplies & Resources',

                });
              }}
            />
            <CustomButton
              title="Case Studies"
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'Case Studies',
                });
              }}
            />

            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'IMPORTANT',
                });
              }}
              style={[styles.button, { flexDirection: 'row' }]}>
              <Image
                resizeMode="stretch"
                style={styles.icon}
                source={require('../../../assets/Icons/Important.png')}
              />
              <Text style={styles.buttonText}>Important!</Text>
            </TouchableOpacity> */}

            {/* <CustomButton
              title="What is a Poultice?"
              onPress={() => {
                navigation.navigate('Support', {
                  btnName: 'What is a Poultice?',
                });
              }}
            />
            */}


          </View>
          <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/Images/surphce.jpg')}
            />
          </View>
        </ScrollView>

      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
}

export default HomeScreen;
