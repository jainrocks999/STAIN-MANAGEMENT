import React, { useEffect, useState } from 'react';
import {
  Alert,
  ImageBackground, 
  Text,
  StatusBar, 
  TouchableOpacity, 
  View
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';



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
              <View>
              <TouchableOpacity onPress={()=>{
              navigation.navigate('Account_1')
              }}
                style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}>{'Login & Security'}</Text>
              <Text
              style={styles.settingsItemsText}>{'>'}</Text>
              </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity  style={styles.settingsItems}
               onPress={()=>navigation.navigate('Edit')}>
              <Text style={styles.settingsItemsText}>{'Your Address'}</Text>
              <Text style={styles.settingsItemsText}>{'>'}</Text>
              </TouchableOpacity>
              </View>
              <TouchableOpacity 
              onPress={()=>{navigation.navigate('Payment')}}
              style={styles.settingsItems}>
              <Text style={styles.settingsItemsText}>{'Your Payments'}</Text>
              <Text style={styles.settingsItemsText}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          </ImageBackground>
     <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
      </View>
  );
}

export default connect()(AccManagement);
