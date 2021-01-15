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
import TitleText from '../../../component/Headertext';
import HTML from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';

const SupportTwo = () => {

  const [contents, setContent] = useState();
  const AppDetail = useSelector((state) => state.AppDetails);
  const selector = useSelector((state) => state.StainDetails);
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState(null);

  useEffect(() => {
    setButton('About Stains'.toUpperCase());
    const selectedName = AppDetail.map((element) => {
      if (element.support != '') {
        setContent(element.support);
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
          <TitleText title={'SUPPORT'.toUpperCase()} color={'#9E3B22'} fontSize={22} />
          <View style={styles.subHeadingView}>
            <HTML
              value={contents}
              // imagesMaxWidth={Dimensions.get('window').width}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomTab/>
    </View>
  );
};

export default connect()(SupportTwo);
