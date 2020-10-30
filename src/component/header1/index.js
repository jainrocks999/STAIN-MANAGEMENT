import React, { useEffect } from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity, Alert} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../storage';

const CustomHeader= (props)=> {

  const navigation = useNavigation();
 let _menu = null;
 
 const setMenuRef = ref => {
  _menu = ref;
 };

 const Account = () => {
    navigation.navigate('Account');
   _menu.hide();
 };
 const About = () => {
   navigation.navigate('About')
   _menu.hide();
 };
 const Resource = () => {
   navigation.navigate('resource')
   _menu.hide();
 };
 const Support = () => {
   navigation.navigate('supportTwo')
   _menu.hide();
 };
const Logout = () => {
  Alert.alert(
    'Are you want to logout ?',
    '',
    [
      {
        text: 'Cancel',
        onPress: () => {
          cancelable: false;
        },
        style: 'cancel',
      },
      { text: 'ok', onPress: () => setlog() },
    ],
    { cancelable: false },
  );
  //_menu.hide()
};
const setlog = () => {
  try {
    _menu.hide()
    AsyncStorage.setItem(storage.Username,'');
    navigation.navigate('Login');
  } catch (error) {
    console.error(error);
  }
};

const showMenu = () => {
   _menu.show();
 };

  return (
<View style={styles.header}>
<TouchableOpacity onPress={()=>{Alert.alert('notification')}}>
<Image source={require('../../assets/Icons/bell.png')}
style={{tintColor:'#fff'}}
resizeMode='center' />

</TouchableOpacity>
<TouchableOpacity onPress={props.onPress}>
<Menu
style={{paddingHorizontal:20,width:'40%',}}
          ref={setMenuRef}
          button={<TouchableOpacity onPress={showMenu}>
            <Image source={require('../../assets/Icons/menu.png')} />
            </TouchableOpacity>}
        >
          <MenuItem
          style={styles.itemSeperator}
          onPress={Account}>Account</MenuItem>
          <MenuItem
           style={styles.itemSeperator}
           onPress={About}>About the APP</MenuItem>
        
          <MenuItem 
          style={styles.itemSeperator}
          onPress={Resource}>Resources</MenuItem>

          <MenuItem 
          style={styles.itemSeperator}
          onPress={Support}>Support</MenuItem>
          <MenuItem 
          style={styles.itemSeperator}
          onPress={Logout}>Logout</MenuItem>
        </Menu>

</TouchableOpacity>
        </View>
    
  );
}

export default connect()(CustomHeader);

