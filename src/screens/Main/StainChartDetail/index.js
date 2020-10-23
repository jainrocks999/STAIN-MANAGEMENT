import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './style';
import { useSelector} from 'react-redux';
import {useNavigation, Route} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import colors from '../../../component/colors';
import {ScrollView, Dimensions} from 'react-native';
import HTML from 'react-native-render-html';
import style from './style';

const StainChartDetail = ({route}) => {
  const navigation = useNavigation();
  const [contents,setContent]=useState()
  const selector=useSelector(state=>state.StainDetails)
  const [name,setName]=useState(null)
  const [button,setButton]=useState(null)

  const {btnName} = route.params;
  
  useEffect(()=>{
    setButton(btnName)
  const selectedName=selector.map(element =>{ 
     if(element.name==btnName) {
        setContent(element.content)
  }});
  },[])

 const loadData = () => {
       return (
          <HTML
             html={contents}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
      };
  return (
    <View style={{flex: 1}}>
      <CustomHeader />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        
        <Text 
          style={style.headerText}>
          {button}
        </Text>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{flex: 1,paddingHorizontal:30,}}>
          {loadData()}
        </ScrollView>

        <BottomTab />
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
    </View>
  );
};

export default StainChartDetail

