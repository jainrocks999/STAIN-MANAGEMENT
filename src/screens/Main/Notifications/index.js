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
import CustomHeader from '../../../component/header';
import TitleText from '../../../component/Headertext';
import StaticText from '../../../component/StaticText';
import HTMLView from 'react-native-htmlview';
import BottomTab from '../../../component/BottomTab';
import { FlatList } from 'react-native-gesture-handler';
const arr=[
  {
  title:'Push notification',
  description:'This is stain app for concrete and any other things related to material'
  },{
    title:'Push notification',
    description:'This is stain app for concrete and any other things related to material'
  }
]
const Notification = () => {
  const navigation = useNavigation();
  const notificationDetails = useSelector((state) => state.NotificationDetails);
  console.log('notification data',notificationDetails)
  return (
    <View
      style={styles.imageBackground}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
             <TitleText title={'Notifications'} color={'#9E3B22'} fontSize={22} />
       <FlatList
       style={{marginTop:10}}
       data={notificationDetails}
       renderItem={({item})=>(
        // <View style={styles.subHeadingView}>
        <View style={{shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{height:2,width:0},
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:100,
        marginHorizontal:10,
        marginVertical:3,
        padding:10
        }}>
        <Text style={{color:'green'}}>{item.title}</Text>
        <Text style={{marginTop:10}}>{item.description}</Text>
        </View>
       )}
       keyExtractor={item => item.id}
       />

      </ImageBackground>
    </View>
  );
};

export default connect()(Notification);
