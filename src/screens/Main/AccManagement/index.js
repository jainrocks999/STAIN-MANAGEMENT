import React, { useEffect, useState } from 'react';
import {Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';



const AccManagement =()=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  
  return (
    <View style={{flex:1}}>
<CustomHeader onPress ={()=>{Alert.alert('hey')}}/>
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <View style={styles.heading}>
           <Text style={styles.subHeading}>Account Management</Text>
            </View>
             
            <View style={styles.settings}>
             <Text style={styles.settingsText}>Account Settings</Text>
            <View style={styles.settingsContainer}>
              <View style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}>{'Login & Security'}</Text>
              <Text
              onPress={()=>{
                navigation.navigate('Account_1')
              }}
              style={styles.settingsItemsText}>{'>'}</Text>
              </View>
              <View style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}>{'Your Address'}</Text>
              <Text style={styles.settingsItemsText}>{'>'}</Text>
              </View>
              <View style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}>{'Your Payments'}</Text>
              <Text style={styles.v}>{'>'}</Text>
              </View>
            </View>
          </View>

         
          </ImageBackground>
       {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
      </View>
  );
}

export default connect()(AccManagement);
