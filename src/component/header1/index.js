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
 
 const setMenuRef = ref => {
  _menu = ref;
 };

 const Account = () => {
    navigation.navigate('Account');
   _menu.hide();
 };
 const About = () => {
    // navigation.navigate('Support', {
    //   itemId: 7,
    //   otherParam: 'About App',
    // });
    // Alert.alert('Data not found')
   _menu.hide();
 };
 const Buy = () => {
    // navigation.navigate('Support', {
    //   itemId: 8,
    //   otherParam: 'Resources',
    // });
    // Alert.alert('Data not found')
   _menu.hide();
 };
 const Support = () => {
    
    // navigation.navigate('Support', {
    //   itemId: 9,
    //   otherParam: 'Support',
    // });
    // Alert.alert('Data not found')
   _menu.hide();
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
          onPress={Buy}>Resources</MenuItem>

          <MenuItem 
          style={styles.itemSeperator}
          onPress={Support}>Support</MenuItem>
        </Menu>

</TouchableOpacity>
        </View>
    
  );
}

export default connect()(CustomHeader);

