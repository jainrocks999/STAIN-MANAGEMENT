import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';
import styles from './style';
import { connect, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/MainHeader';
import TitleText from '../../../component/Headertext';
import HTMLView from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';

const Resources = () => {
  const navigation = useNavigation()
  const StainPagesDetails = useSelector((state) => state.StainPagesDetails);
  const [Button, setButton] = useState('');
  const [contents, setContent] = useState('');


  useEffect(() => {
    const selectedName = StainPagesDetails.map((element) => {
      if (element.id == '10') {
        setContent(element.content);
        setButton(element.name);
      }
    });
  });
  return (
    <View style={styles.imageBackground}>
      <CustomHeader
        goBack={() => navigation.goBack()}
        goToNotification={() => navigation.navigate('Notifications')}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TitleText title={Button} color={'#9E3B22'} fontSize={22} />
          <View style={styles.subHeadingView}>

            <HTMLView
              value={contents}

            />

          </View>
        </ScrollView>
        <BottomTab />
      </ImageBackground>
    </View>
  );
};

export default connect()(Resources);
