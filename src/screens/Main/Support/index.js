import React, { useEffect, useState } from 'react';
import {Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';



const Support =()=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  
  return (
    <View style={{flex:1}}>
<CustomHeader onPress ={()=>{Alert.alert('hey')}}/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.headingView}>
           <Text style={styles.title}>SUPPORT</Text>
            </View>
<View style={{width:'80%'}}>
<Text style={styles.heading}>
            App Technical Support
          </Text>
            
           <Text style={styles.subHeading}>
             ksjdfhkhzkvkbvkbkbvkjsnmsks djxfgashzjxbdfjhsb hg sdghbdhdfjzhxz
             </Text>
   
</View>
             
            

         
          </ImageBackground>
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(Support);
