import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import styles from './style';
import {connect, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import TitleText from '../../../component/TitleText';
import HTMLView from 'react-native-htmlview';
import StaticText from '../../../component/StaticText';

const Resources = () => {
  const [contents, setContent] = useState();
  const AppDetail = useSelector((state) => state.AppDetails);
  const [button, setButton] = useState(null);
 

  useEffect(() => {
    setButton('About Stains'.toUpperCase());
    const selectedName = AppDetail.map((element) => {
      if (element.resources != '') {
        setContent(element.resources);
      }
    });
  });
  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText title={StaticText.Resources.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          <View style={styles.subHeadingView}>

            <HTMLView
        value={contents}
       
      />

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default connect()(Resources);
