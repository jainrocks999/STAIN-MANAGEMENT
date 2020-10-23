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
          <Text style={styles.SignIn}>Sign-In</Text>
          <Text style={styles.Subscriber}>Already a Subscriber?</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
            }}>
            <Image 
            source={require('../../../assets/Icons/Photo.png')} />
            <View style={{paddingLeft: 10}}>
              <Text style={[styles.Subscriber, {fontWeight: 'bold'}]}>
                Name Here
              </Text>
              <Text style={styles.Subscriber}>email@yourplacehere.com</Text>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder=" Password"
              placeholderTextColor="grey"
            />
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxContainerView}>
              <View style={styles.checkboxContainerView1}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  boxType="square"
                  onFillColor="red"
                  onTintColor="#fffff"
                />
              </View>
              <Text style={styles.checkbox}>Show Password</Text>
            </View>
            <Text onPress={()=>{navigation.navigate('ForgotPassword')}} style={[styles.checkbox,{color:'#0058FF'}]}>Forgot Password?</Text>
          </View>
          <View style={[styles.checkboxContainerView,{marginTop:'5%'}]}>
            <View style={styles.checkboxContainerView1}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                boxType="square"
                onFillColor="red"
                onTintColor="#fffff"
              />
            </View>
            <Text style={styles.checkbox}>Keep me signed in</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          <Text style={[styles.checkbox,{textAlign:'center',marginTop:'10%'}]}>Change Password</Text>
        </View>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(AccManagement_1);
