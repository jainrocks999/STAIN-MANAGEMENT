import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import {ScrollView, Dimensions} from 'react-native';
import StatusBar from '../../../component/StatusBar';
import HTMLView from 'react-native-htmlview';
//import style from './style';
import Loader from '../../../component/loader';
import TitleText from '../../../component/TitleText';

const AboutStain = ({route}) => {
  const [contents, setContent] = useState();
  const selector = useSelector((state) => state.StainDetails);
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState(null);
  const [chart, setChart] = useState(false);

  useEffect(() => {
    setButton('About Stains'.toUpperCase());

    const selectedName = selector.map((element) => {
      if (element.name == 'About Stains') {
        setChart(false);
        setContent(element.mobile_content);
      }
    });
  });

  return (
    <View style={styles.imageBackground}>
      <CustomHeader />
      {isFetching ? <Loader /> : null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
          <TitleText title={button}  color={'#9E3B22'} fontSize={22}/>
          <HTMLView
            value={contents}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
      <BottomTab />
    </View>
  );
};

export default AboutStain;
