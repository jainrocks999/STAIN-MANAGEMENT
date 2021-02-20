import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/MainHeader';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../component/colors';
import CustomButton from '../../../component/Button';
import Headertext from '../../../component/Headertext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selector = useSelector((state) => state.StainPagesDetails);

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

  return (
    <SafeAreaView style={styles.imageBackground}>
      <StatusBar backgroundColor={colors.darkOrange} barStyle="default" />

      <CustomHeader
        goToNotification={() => navigation.navigate('Notifications')}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/HomeScreen.png')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.SecondView}>
            <Headertext
              title={'Fred Hueston’s'}
              color={'#000'}
              fontSize={hp('2%')}
            />

            <View
              style={{
                height: hp('10%'),
                width: wp('45%'),
                marginTop: hp('1%'),
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require('../../../assets/Images/stain.png')}
              />
            </View>
            <View
              style={{
                marginTop: hp('1%'),
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={styles.logo1}
                source={require('../../../assets/Images/stain_text.png')}
              />
            </View>
            <View style={{marginTop: hp('1.5%')}}>
              <View style={{width: '80%', alignSelf: 'center'}}>
                <Text
                  style={{
                    fontSize: hp('1.8%'),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  THE ULTIMATE GUIDE TO PROFESSIONAL STAIN MANAGEMENT
                </Text>
              </View>
              <View
                style={{
                  width: wp('100%'),
                  alignSelf: 'center',
                  marginTop: hp('1%'),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: hp('1.6%'),
                  }}>
                  For Stone, Concrete and Other Hard Porous Surfaces
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
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

            <CustomButton
              title="Case Studies"
              onPress={() => {
                navigation.navigate('Support');
              }}
            />

            <CustomButton
              title="Resources"
              onPress={() => {
                navigation.navigate('resource');
              }}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
              source={require('../../../assets/Images/surphce.jpg')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HomeScreen;
