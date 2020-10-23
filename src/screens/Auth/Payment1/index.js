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
          <View>
            <Text style={styles.Subscriber}>Card Number</Text>
            <TextInput
              style={styles.textInput}
              placeholder=" XXXX XXXX XXXX XXXX"
              placeholderTextColor="grey"
            />
          </View>
         <View style={{marginTop:'5%',flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
         <View style={{width:'45%'}}>
            <Text style={styles.Subscriber}>Expiry</Text>
            <TextInput
              style={styles.textInput}
              placeholder="XX/XX"
              placeholderTextColor="grey"
            />
          </View>
          <View style={{width:'45%'}}>
            <Text style={styles.Subscriber}>Cvv</Text>
            <TextInput
              style={styles.textInput}
              placeholder="XXX"
              placeholderTextColor="grey"
            />
          </View>
         </View>
          <View style={{marginTop:'5%'}}>
            <Text style={styles.Subscriber}>Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder=" "
              placeholderTextColor="grey"
            />
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
            <Text style={styles.checkbox}>Save Card Details</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Account');
            }}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>

          </View>
      </ImageBackground>
      {/* <Statusbar backgroundColor={Color.white} barStyle="dark-content" /> */}
    </View>
  );
};

export default connect()(AccManagement_1);
