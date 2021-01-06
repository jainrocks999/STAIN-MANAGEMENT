import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './style';
import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import TitleText from '../../../component/TitleText';
import StaticText from '../../../component/StaticText';
import HTMLView from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';

const About = () => {
  const navigation = useNavigation();
  const [contents, setContent] = useState();
  const AppDetail = useSelector((state) => state.AppDetails);
  const selector = useSelector((state) => state.StainDetails);
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState(null);
  const [chart, setChart] = useState(false);

  useEffect(() => {
    setButton('About Stains'.toUpperCase());

    const selectedName = AppDetail.map((element) => {
      if (element.about_app != '') {
        setContent(element.about_app);
      }
    });
  });

  return (
    <View
      style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText title={StaticText.About.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          <View style={styles.subHeadingView}>

            <HTMLView
              value={contents}
            // stylesheet={styles}
            />

          </View>
        </ScrollView>

        <View
          style={styles.version}>
          <Text style={[styles.checkbox, { color: '#9E3B22' }]}>
            {StaticText.VersionText}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default connect()(About);
