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
                    width: '100%',
                    height: 200,
                  }}>
                  <WebView
                    source={{
                      uri: element.video_url,
                    }}
                  />
                </View>
                <View style={{alignSelf: 'flex-start', marginTop: 8}}>
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
            {/* <Modal
              isVisible={isModalVisible}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="right"
              onBackdropPress={() => setModalVisible(false)}
              supportedOrientations={['landscape']}>
              <View style={styles.modal}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{flexDirection: 'row-reverse'}}>
                  <Image
                    style={{tintColor: '#474747', height: 25, width: 25}}
                    source={require('../../../assets/Icons/close.png')}
                  />
                </TouchableOpacity>

                <View style={{borderWidth: 1, flex: 1, width: '100%'}}>
                  
                </View>
              </View>
            </Modal> */}
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
            fontSize={22}
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
