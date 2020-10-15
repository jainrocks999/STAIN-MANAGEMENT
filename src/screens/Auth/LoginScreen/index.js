import React, { useEffect, useState } from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header';



const LoginScreen =()=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  return (
    <View style={{flex:1}}>
<CustomHeader/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.logoContainer}>
           <Text style={styles.subHeading}>Member Login</Text>
            </View>
            <View style={styles.textInputContainer}>
            <TextInput 
            style={styles.textInput}
            placeholder=' Username'
            placeholderTextColor='grey'
            />
            <TextInput 
            style={styles.textInput}
            placeholder=' Password'
            placeholderTextColor='grey'
            />
            </View>

          <View style={styles.checkboxContainer}>
          <View style={{backgroundColor:"#fff"}}> 
             <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
    boxType= 'square'
    onFillColor='red'

    onTintColor= '#fffff'
    
  />
  </View>
  <Text style={styles.checkbox}>Keep me logged in</Text>
          </View>

          <TouchableOpacity style={styles.button}
          onPress={()=>{
            navigation.navigate('Home')
          }}
          >
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>

          </ImageBackground>
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(LoginScreen);
