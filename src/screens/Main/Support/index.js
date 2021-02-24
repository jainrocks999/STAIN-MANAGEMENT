import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import BottomTab from '../../../component/BottomTab';
import HTMLView from 'react-native-render-html';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import {WebView} from 'react-native-webview';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
let images = '';
const SupportScreen = ({route}) => {
  const navigation = useNavigation();

  const selector = useSelector((state) => state.StainDetails);
  const CaseStudy = useSelector((state) => state.CaseStudyDetails);

  const [contents, setContent] = useState('');
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState('');
  const [chart, setChart] = useState(false);
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  let buttonName = 'Case Studies';

  useEffect(() => {
    setButton(buttonName);
    const selectedName = selector.map((element) => {
      if (element.name == buttonName) {
        setChart(false);
        setContent(element.mobile_content);
      }
    });
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    //setModalVisible(true);
  };

  // _onOrientationDidChange = (orientation) => {
  //   if (orientation == 'LANDSCAPE-LEFT') {
  //     //do something with landscape left layout
  //   } else {
  //     //do something with portrait layout
  //   }
  // };

  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
})();`;
  const renderCaseStudies = () => {
    if (button == 'Case Studies') {
      return CaseStudy.map((element) => {
        let imageArray = [];
        images = element.images;
        imageArray.push(images);
        console.log('yogii:', element.video_url);

        return (
          <View style={styles.MainContainer}>
            <View>
              <View style={styles.cardViewStyle}>
                <View
                  style={{
                    width: wp('100%'),
                    height: hp('25%'),
                  }}>
                  <WebView
                    style={{marginTop: hp('1%'), width: wp('100%')}}
                    startInLoadingState={true}
                    javaScriptEnabled={true}
                    scrollEnabled={false}
                    allowsFullscreenVideo={true}
                    userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 
 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                    source={{
                      uri: element.video_url,
                    }}
                    // source={{
                    //   uri: `https://staincarepro.com/stain-app-page/?uid=10`,
                    // }}
                  />
                </View>
                <View style={{alignSelf: 'flex-start', marginTop: hp('1%')}}>
                  <Text style={styles.cardView_InsideText}>
                    {element.case_study_name}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: 1,
                    marginBottom: 15,
                  }}>
                  <Text style={styles.cardView_InsideText1}>
                    {element.short_description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      });
    } else return <HTMLView value={contents} />;
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.goBack()}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText
            title={buttonName.toUpperCase()}
            color={'#9E3B22'}
            fontSize={hp('3%')}
          />
          {renderCaseStudies()}
        </ScrollView>
      </ImageBackground>
      <StatusBar />
      <BottomTab />
    </View>
  );
};

export default SupportScreen;
