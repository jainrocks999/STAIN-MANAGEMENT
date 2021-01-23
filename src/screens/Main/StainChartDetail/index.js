import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { useNavigation, Route } from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import HTML from 'react-native-render-html';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/BottomTab';
import Modal from 'react-native-modal';


const StainChartDetail = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState();
  const selector = useSelector(state => state.StainDetails)
  const [chart, setChart] = useState(false)
  const [button, setButton] = useState(null)
  const [isVisible, setisVisible] = useState(false);
  const [show_information, setshow_information] = useState(false);
  const [Important, setImportant] = useState('');

  const { btnName } = route.params;

  useEffect(() => {
    setButton(btnName.toUpperCase())
    const selectedName = selector.map(element => {
      if (element.name == btnName) {
        console.log('hello dear response' + JSON.stringify(element))
        setContent(element.content)
        if (element.show_information === '1') {
          setImportant(element.information)
          setshow_information(true)
          // setisVisible(true)
        } else {
          setImportant(element.information)
          setshow_information(false)
        }


      }
    });
  }, [])
  const popupshow = () => {
    setisVisible(true)
  }
  const dismiss = () => {
    setisVisible(false)
  }
  return (
    <View style={styles.imageBackground}>
       <CustomHeader 
             goBack={()=>navigation.goBack()}
             goToNotification={()=>navigation.navigate('Notifications')}
            />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>


        <ScrollView
          style={styles.scroll}>
          <TitleText title={button} color={'#9E3B22'} fontSize={22} />
          <View style={{ alignSelf: 'flex-end' }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}
              onPress={popupshow}>
              {show_information == true && (
                <Image
                  style={{ tintColor: 'red',width:34,height:30 }}
                  source={require('../../../assets/Icons/Important.png')}
                />
              )}
              {show_information == false && (
                null
              )}
            </TouchableOpacity>
          </View>
          <HTML html={contents} />
          <Modal
            isVisible={isVisible}
            swipeDirection="right"
            onBackdropPress={() =>
              setisVisible(false)}
          >
            <View style={styles.modal}>
              <View style={{ justifyContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end', marginBottom: -20 }}>
                <TouchableHighlight style={styles.popup} onPress={dismiss}>
                  <Text
                    style={styles.ModelBtntext}>
                    X
                  </Text>
                </TouchableHighlight>
              </View>
              <TitleText title={'Caution'} color={'#9E3B22'} fontSize={22} />


              <HTML html={Important} />

            </View>
          </Modal>
        </ScrollView>

      </ImageBackground>
      <BottomTab />
      <StatusBar />

    </View>
  );
};

export default StainChartDetail;

