import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  ScrollView,
   Dimensions
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import HTML from 'react-native-render-html';
//import style from './style';
import Loader from '../../../component/loader';
import TitleText from '../../../component/Headertext';
import StatusBar from '../../../component/StatusBar';

const HowTo = ({route}) => {
  const navigation = useNavigation();
  const [contents, setContent] = useState();
  const selector = useSelector((state) => state.StainPagesDetails);
  const isFetching = useSelector((state) => state.isFetching);
  const [button, setButton] = useState(null);
  const [chart, setChart] = useState(false);
  useEffect(() => {
    setButton('How to Apply a Poultice'.toUpperCase());
    const selectedName = selector.map((element) => {
      if (element.name == 'How to Apply a Poultice') {
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
         // showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}>
           
          <TitleText title={button} color={'#9E3B22'} fontSize={22} />
        
          <HTML html={contents} 

            imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
      </ImageBackground>
      <StatusBar/>
      <BottomTab />
    </View>
  );
};

export default HowTo;
