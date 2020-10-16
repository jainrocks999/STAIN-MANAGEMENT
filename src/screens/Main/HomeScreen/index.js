import React, { useEffect } from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity, Dimensions} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import CustomHeader from '../../../component/header';

import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const HomeScreen=()=> {
 
  const navigation = useNavigation();
  
  
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
              navigation.navigate('Support');
            }}
            style={[styles.button,{marginTop:'5%'}]}>
              <Text style={styles.buttonText}
              >About Stains</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support');
            }}

            style={styles.button}>
              <Text style={styles.buttonText}>Case Studies</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                         onPress={()=>{
                          navigation.navigate('Support');
                        }}
            style={styles.button}>
              <Text style={styles.buttonText}>How to Apply a Poultice</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support');
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>What is a Poultice?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={()=>{
              navigation.navigate('Support');
            }}
            style={styles.button}>
              <Text style={styles.buttonText}>Stain Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{
              navigation.navigate('Support');
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
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(HomeScreen);
