import React, { useEffect } from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity, Alert} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';



const BottomTab= (props)=> {

  const navigation = useNavigation();
  

  return (
        <View style={styles.header}>

<TouchableOpacity onPress={()=>{
  navigation.navigate('Home')
}}>
<Image source={require('../../assets/Icons/home.png')}
style={{tintColor:'#fff',height:30,width:30}}
resizeMethod={'resize'}
resizeMode='center'
/>
</TouchableOpacity>

<TouchableOpacity 
onPress={()=>{
  navigation.navigate('Video')
}}>
<Image source={require('../../assets/Icons/Video.png')}
style={{tintColor:'#fff',height:30,width:30}}
resizeMode='center'/>
</TouchableOpacity>

<TouchableOpacity 
    onPress={()=>{
      navigation.navigate('Support')
    }}>
<Image source={require('../../assets/Icons/About.png')}
style={{tintColor:'#fff',height:30,width:30}}
resizeMode='center' />
</TouchableOpacity>

<TouchableOpacity    onPress={()=>{
      navigation.navigate('Support')
    }}>
<Image source={require('../../assets/Icons/How_To.png')}
style={{tintColor:'#fff',height:30,width:30}}
resizeMode='center' />
</TouchableOpacity>

<TouchableOpacity    onPress={()=>{
      navigation.navigate('Support')
    }}>
<Image source={require('../../assets/Icons/Stain_Chart.png')}
style={{tintColor:'#fff',height:30,width:30}}
resizeMode='center' />
</TouchableOpacity>

        </View>
    
  );
}

export default connect()(BottomTab);
