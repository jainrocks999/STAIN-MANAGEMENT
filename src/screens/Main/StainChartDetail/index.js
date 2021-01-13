import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import styles from './style';
import { useSelector } from 'react-redux';
import { useNavigation, Route } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import HTML from 'react-native-render-html';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';
import BottomTab from '../../../component/BottomTab';

const StainChartDetail = ({ route }) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState()
  const selector = useSelector(state => state.StainDetails)
  const [chart, setChart] = useState(false)
  const [button, setButton] = useState(null)

  const { btnName } = route.params;

  useEffect(() => {
    setButton(btnName.toUpperCase())
    const selectedName = selector.map(element => {
      if (element.name == btnName) {

        setContent(element.mobile_content)
      }
    });
  }, [])


  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>


        <ScrollView
          style={styles.scroll}>
          <TitleText title={button} color={'#9E3B22'} fontSize={22} />


          <HTML html={contents} />

        </ScrollView>
      </ImageBackground>
      <BottomTab/>
      <StatusBar />
    
    </View>
  );
};

export default StainChartDetail;

