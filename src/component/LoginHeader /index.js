import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Animated,
  Linking,
} from 'react-native';

import styles from './style';
import {connect} from 'react-redux';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../storage';

import {TouchableHighlight} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import colors from '../colors';

const CustomHeader = (props) => {
  const navigation = useNavigation();
  const [anim, setAnim] = useState(new Animated.Value(0));
  const [isVisible, setisVisible] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);

  let _menu = null;

  const setMenuRef = (ref) => {
    _menu = ref;
  };

  const toggleModal = () => {
    setisModalVisible(!isModalVisible);
    //setisModalVisible(true);
    _menu.hide();
    console.log('modall:', isModalVisible);
  };

  const showMenu = () => {
    _menu.show();
  };

  const popupshow = () => {
    setisVisible(true);
  };
  const dismiss = () => {
    setisVisible(false);
  };

  const dolink = async () => {
    await Linking.openURL('mailto:apps@surphaces.com');
  };

  //   My account
  // About the App
  // Support
  // Logout
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true,
          // delay: 800
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: -1,
          duration: 120,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);
  const rotation = anim.interpolate({
    inputRange: [-1, 1], // left side to right side
    outputRange: ['-20deg', '20deg'], // before that we have to check now it's perfect
  });
  return (
    <View style={styles.header}>
      <View style={styles.header1}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={showMenu}>
          <Menu
            style={{width: '38%'}}
            ref={setMenuRef}
            button={
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                style={{
                  height: 26,
                  width: 26,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: '90%', width: '100%'}}
                  resizeMode="contain"
                  source={require('../../assets/Icons/menu.png')}
                />
              </TouchableHighlight>
            }>
            <MenuItem style={styles.itemSeperator} onPress={popupshow}>
              <Text style={{fontFamily: 'Arial'}}>Help</Text>
            </MenuItem>
          </Menu>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isVisible}
        swipeDirection="right"
        onBackdropPress={() => setisVisible(false)}>
        <View style={styles.modal}>
          <View style={{width: '100%'}}>
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Help
            </Text>
          </View>
          <View style={{width: '80%', marginTop: 10}}>
            <Text
              style={{
                color: colors.black,
                fontWeight: '600',
                fontSize: 16,
                textAlign: 'center',
              }}>
              Please email us with your support issue and we'll get back to you
              within 24 hours.
            </Text>
          </View>
          <TouchableOpacity onPress={dolink} style={styles.ModelmsgView}>
            <Text style={styles.ModelMsgText}>{'apps@surphaces.com'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.popup} onPress={toggleModal}>
            <Text style={styles.ModelBtntext}>Skip</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default connect()(CustomHeader);
