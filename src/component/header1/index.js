import React, { useEffect } from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity, Alert} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';



const CustomHeader= (props)=> {

  const navigation = useNavigation();
  _menu = null;
 
  setMenuRef = ref => {
   this._menu = ref;
 };

  Account = () => {
    navigation.navigate('Account');
   this._menu.hide();
 };
  About = () => {
    navigation.navigate('About');
   this._menu.hide();
 };
  Buy = () => {
    navigation.navigate('Buy');
   this._menu.hide();
 };
  Support = () => {
    navigation.navigate('Support');
   this._menu.hide();
 };

  showMenu = () => {
   this._menu.show();
 };

  return (
        <View style={styles.header}>

<TouchableOpacity onPress={props.onPress}>
<Image source={require('../../assets/Icons/bell.png')}
style={{tintColor:'#fff'}}
resizeMode='center' />

</TouchableOpacity>
<TouchableOpacity onPress={props.onPress}>
<Menu
style={{paddingHorizontal:20,width:'40%',}}
          ref={this.setMenuRef}
          button={<TouchableOpacity onPress={this.showMenu}>
            <Image source={require('../../assets/Icons/menu.png')} />
            </TouchableOpacity>}
        >
          <MenuItem
          style={styles.itemSeperator}
          onPress={this.Account}>Account</MenuItem>
          <MenuItem
           style={styles.itemSeperator}
           onPress={this.About}>About the APP</MenuItem>
        
          <MenuItem 
          style={styles.itemSeperator}
          onPress={this.Buy}>Resources</MenuItem>

          <MenuItem 
          style={styles.itemSeperator}
          onPress={this.Support}>Support</MenuItem>
        </Menu>

</TouchableOpacity>
        </View>
    
  );
}

export default connect()(CustomHeader);
