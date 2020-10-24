import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';


const AccManagement_1 = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

   _menu = null;
 
   setMenuRef = ref => {
    this._menu = ref;
  };
 
   hideMenu = () => {
    this._menu.hide();
  };
 
   showMenu = () => {
    this._menu.show();
  };

 
 

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        onPress={this.showMenu}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/Images/AppBackground.jpg')}>
        <View style={styles.heading}>
          <Text style={styles.subHeading}>Account Management</Text>
        </View>
        
        <View style={styles.settings}>
          <Text style={styles.SignIn}>Forgot Password ?</Text>
         
          
          <View>
            <TextInput
              style={styles.textInput}
              placeholder=" Enter email"
              placeholderTextColor="grey"
            />
          </View>

          

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>

       </View>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(AccManagement_1);
