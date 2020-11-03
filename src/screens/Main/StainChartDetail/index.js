import React, {useEffect, useState} from 'react';
import {
  BackHandler,
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
  const [chart,setChart]=useState(false)
  const [button,setButton]=useState(null)

  const {btnName} = route.params;
  
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
    setButton(btnName)
  const selectedName=selector.map(element =>{ 
     if(element.name==btnName) {
        setContent(element.content) 
  }});
  },[])


  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
  const ShowStain=()=>{
    selector.map(element =>{ 
      if(element.name=="About Stains") {
        setButton(element.name)
         setContent(element.content)
   }});
  }

  const ShowWhat=()=>{
    selector.map(element =>{ 
      if(element.name=="What is a Poultice?") {
        setButton(element.name)
         setContent(element.content)
   }});
  }

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
      </ImageBackground>
      <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
      {/* <BottomTab 
        goToAboutStain={ShowStain}
        goToWhatIs={ShowWhat} 
        goToStainChart={()=>setChart(false)}  
        /> */}
    </View>
  );
};

export default StainChartDetail

