import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../component/header1';
import colors from '../../../component/colors';

const AccManagement_1 = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{flex: 1}}>
      <CustomHeader/>
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
    <StatusBar backgroundColor={colors.darkOrange} barStyle='light-content'/>
    </View>
  );
};

export default connect()(AccManagement_1);
