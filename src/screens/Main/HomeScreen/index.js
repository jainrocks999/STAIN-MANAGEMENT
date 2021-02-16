import React, {useEffect, useState} from 'react';
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
import CustomHeader from '../../../component/MainHeader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../component/colors';
import CustomButton from '../../../component/Button';
import StaticText from '../../../component/StaticText';
import Headertext from '../../../component/Headertext';
import TitleText from '../../../component/TitleText';
function HomeScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selector = useSelector((state) => state.StainPagesDetails);
  const StainDetails = useSelector((state) => state.StainDetails);

  //let Aboutstain = '';

  useEffect(() => {
    loadData();
    getstainpage();
    loadData1();
  }, []);

  const loadData1 = async () => {
    dispatch({
      type: 'User_CaseStudy_Request',
      url: 'v1/stain/case_studies',
    });
  };
  const loadData = async () => {
    dispatch({
      type: 'User_Stain_Request',
      url: 'v1/stain/all',
    });
  };
  const getstainpage = () => {
    dispatch({
      type: 'User_StainPages_Request',
      url: 'v1/stain/stain_pages',
    });
  };

  const notification = async () => {
    dispatch({
      type: 'User_Notification_Request',
      url: 'v1/stain/stain_notifications',
    });
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goToNotification={() => navigation.navigate('Notifications')}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.SecondView}>
            <Headertext title={'Fred Hueston’s'} color={'#000'} fontSize={16} />
            <Image
              style={styles.logo}
              source={require('../../../assets/Images/stain.png')}
            />
            <View
              style={{
                height: 30,
                width: 390,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={styles.logo1}
                source={require('../../../assets/Images/stain_text.png')}
              />
            </View>
            <View style={{marginTop: 8}}>
              <View style={{width: '80%', alignSelf: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  THE ULTIMATE GUIDE TO PROFESSIONAL STAIN MANAGEMENT
                </Text>
              </View>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  For Stone, Concrete and Other Hard Porous Surfaces
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Stain Chart"
              onPress={() => {
                navigation.navigate('Stain');
              }}
            />
            <CustomButton
              title="How-To Video"
              onPress={() => {
                navigation.navigate('HowTo');
              }}
            />
            {selector.map((element) => {
              if (element.id == '6') {
                return (
                  <CustomButton
                    title={element.name}
                    onPress={() => {
                      navigation.navigate('Recommendedsupply');
                    }}
                  />
                );
              }
            })}
            {/* {selector.map((element) => {
              if (element.id == '1') {
                return ( */}
            <CustomButton
              title="Case Studies"
              onPress={() => {
                navigation.navigate('Support');
              }}
            />
            {/* )
             // }cd 
            }) */}
            {/* //} */}
            {selector.map((element) => {
              if (element.id == '1') {
                return (
                  <CustomButton
                    title={element.name}
                    onPress={() => {
                      navigation.navigate('AboutStains');
                    }}
                  />
                );
              }
            })}

            <CustomButton
              title="Resources"
              onPress={() => {
                navigation.navigate('resource');
              }}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image source={require('../../../assets/Images/surphce.jpg')} />
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
    </View>
  );
}

export default HomeScreen;
