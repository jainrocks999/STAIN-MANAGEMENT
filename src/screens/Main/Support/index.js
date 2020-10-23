import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {useNavigation,} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import BottomTab from '../../../component/BottomTab';
import {ScrollView, Dimensions} from 'react-native';
import colors from '../../../component/colors';
import HTML from 'react-native-render-html';
import style from './style';
import Loader from '../../../component/loader';

const SupportScreen = ({route}) => {
  const navigation = useNavigation();
  const [contents,setContent]=useState()
  const selector=useSelector(state=>state.StainDetails)
  const isFetching=useSelector(state=>state.isFetching)
  const [button,setButton]=useState(null)

  const {btnName} = route.params;
  useEffect(()=>{
    setButton(btnName)
  const selectedName=selector.map(element =>{ 
     if(element.name==btnName) {
        setContent(element.content)
  }});
    
  },[])

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
   if(button=='STAIN CHART')
   {
       return(
         <View>
           {
        selector.map(element=>{
        return(
        <View>
        
        <TouchableOpacity 
         onPress={()=>{
          navigation.navigate('StainChart', {
            btnName:element.name,
          });
        }}
        style={{margin:5}}
        >
        <Text style={{fontSize:15}}>{element.name}</Text>
        </TouchableOpacity>
        </View>
        )
      }
    )}</View>
  )
}
    else
       return (
          <HTML
             html={contents}
            imagesMaxWidth={Dimensions.get('window').width}
          />
        );
      };

const getSearch=()=>{
  if(button=='STAIN CHART')
  return(
        <View style={style.search}>
         <TextInput 
         placeholder='Search'
         style={{width:'50%'}}
         />
          <Image source={require('../../../assets/Icons/Search.png')}
           style={{height:20,width:20}}
          />
        </View>
        )
   }
const getImportant=()=>{
  if(button=='IMPORTANT')
  return(
          <View>
            <Image source={require('../../../assets/Icons/Importantt.png')}
             style={{height:110,width:122,margin:10}}
            />
          </View>
          )
     }
  return (
    <View style={{flex: 1}}>
      <CustomHeader />
      {isFetching? <Loader/>:null}
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <Text 
          style={style.headerText}>
          {button}
        </Text>
        {getImportant()}
        {getSearch()}
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={style.scroll}>
          {loadData()}
        </ScrollView>
      </ImageBackground> 
      <StatusBar backgroundColor={colors.darkOrange} barStyle="light-content" />
        <BottomTab 
        goToAboutStain={ShowStain}
        goToWhatIs={ShowWhat}   
        />
       
    </View>
  );
};

export default SupportScreen

