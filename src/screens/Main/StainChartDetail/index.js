import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation, Route} from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import HTML from 'react-native-render-html';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/BottomTab';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const StainChartDetail = ({route}) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState();
  const selector = useSelector((state) => state.StainDetails);
  const [chart, setChart] = useState(false);
  const [button, setButton] = useState(null);
  const [isVisible, setisVisible] = useState(false);
  const [show_information, setshow_information] = useState(false);
  const [Important, setImportant] = useState('');

  const {btnName} = route.params;

  useEffect(() => {
    setButton(btnName.toUpperCase());
    const selectedName = selector.map((element) => {
      if (element.name == btnName) {
        setContent(element.content);
        if (element.show_information === '1') {
          setImportant(element.information);
          setshow_information(true);
          // setisVisible(true)
        } else {
          setImportant(element.information);
          setshow_information(false);
        }
      }
    });
  }, []);
  const popupshow = () => {
    setisVisible(true);
    console.log('omodal', isVisible);
  };
  const dismiss = () => {
    setisVisible(false);
  };
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.goBack()}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView style={styles.scroll}>
          <TitleText title={button} color={'#9E3B22'} fontSize={hp('3%')} />

          <HTML html={contents} />
        </ScrollView>
      </ImageBackground>
      <BottomTab />
      <StatusBar />
    </View>
  );
};

export default StainChartDetail;
