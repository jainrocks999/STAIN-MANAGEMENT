import React, { useEffect, useState } from 'react';
import {
  Alert,
  ImageBackground, 
  Text,
  StatusBar, 
  TouchableOpacity, 
  View,
  BackHandler,
  ScrollView
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';



const AccManagement =()=> {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress',handleBackButtonClick);
   

  })

  const handleBackButtonClick=()=> {
    BackHandler.addEventListener('hardwareBackPress',navigation.goBack());
    return true;
}
  
  return (
    <View style={{flex:1}}>
<CustomHeader />
          <ImageBackground

            style={styles.imageBackground}
            source={require('../../../assets/Images/AppBackground.jpg')}
            
            >
              <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems:'center' }}>
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
              <TouchableOpacity  style={styles.settingsItems}>
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
          </ScrollView>
          </ImageBackground>
     <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
      </View>
  );
}

export default connect()(AccManagement);
