import React, { useEffect, useState,} from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity, StatusBar,Alert} from 'react-native';
import styles from './style';
import CustomHeader from '../../../component/header';
import { useNavigation } from '@react-navigation/native';
import {  useDispatch,useSelector} from 'react-redux';
import colors from '../../../component/colors';

function HomeScreen(props) {
  const dispatch=useDispatch();
  const [data,setData]=useState([])
  const navigation = useNavigation();
  const selector=useSelector(state=>state.StainDetails)
  console.log(selector)
  useEffect(()=>{
  loadData();
  },[])
  
  const loadData=async()=>{
    dispatch({
      type: 'User_Stain_Request',
      url:'v1/stain/all',
    });
  }
  return (
    <View style={{flex:1}}>
       <CustomHeader/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/HomeScreen.png')}
            
            >
              <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            
            source={require('../../../assets/Images/logo.png')}
            />
            
            </View>
              <View style={styles.logoContainer}>
           <Text style={styles.heading}>INTERACTIVE STAIN MANAGEMENT APP</Text>
            
            </View>
              <View style={styles.logoContainer}>
           <Text style={styles.subHeading}>For stone, tile, concrete and{'\n'} other hard porous surfaces</Text>
            
            </View>
            <View style={{flex:1,}}>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support', {
                btnName:'About Stains',
              });
            }}
            style={[styles.button,{marginTop:'5%'}]}>
              <Text style={styles.buttonText}
              >About Stains</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support', {
                btnName:'Case Studies',
              });
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>Case Studies</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
             navigation.navigate('Support' ,{
             btnName:'How to Apply a Poultice',
                });
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>How to Apply a Poultice</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support', {
                btnName:'What is a Poultice?',
              });
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>What is a Poultice?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support', {
                btnName:'STAIN CHART',
              });
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>Stain Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{
              navigation.navigate('Support', {
                btnName:'IMPORTANT',
              });
            }}
            style={[styles.button,{flexDirection:'row',}]}>
              <Image 
              resizeMode='center'
              style={styles.icon}
              source={require('../../../assets/Icons/Important.png')} />
              <Text style={styles.buttonText}>Important!</Text>
            </TouchableOpacity>
            </View>
          </ImageBackground>
       <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content' />
      </View>
  );
}

export default HomeScreen;
