import React, { useEffect } from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity, Alert ,Pressable} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import { connect } from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import storage from '../storage';
import { FlatList, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

const CustomHeader = (props) => {

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
  const Subscribe = () => {
    navigation.navigate('Subscribe')
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
      AsyncStorage.setItem(storage.Username, '');
      AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  const showMenu = () => {
    _menu.show();
  };

  getListViewItem = (item) => {  
    Alert.alert(item.key);  
}  

  return (

    <View style={styles.header}>


      <TouchableOpacity
        style={styles.iconmain}
        onPress={() => { navigation.goBack(null) }}
      >
        <Image source={require('../../assets/Icons/arrow.png')}
          style={styles.icon}
          // style={{ tintColor: '#fff' }}
          resizeMode={'contain'}

        />
      </TouchableOpacity>




      <View style={styles.header1}>
        <TouchableOpacity
        style={{height:26,width:26,justifyContent:'center',alignItems:'center',alignSelf:'center',}}
        onPress={() => { Alert.alert('notification') }}>
          <Image source={require('../../assets/Icons/bell.png')}
            style={{ tintColor: '#fff' ,height:'100%',width:'100%'}}
            resizeMode='cover' />

        </TouchableOpacity>
        <TouchableOpacity 
         style={{height:30,width:30,marginLeft:20,alignItems:'center',justifyContent:'center'}}
         onPress={showMenu}>
            
          <Menu
            ref={setMenuRef}
            button={
            <TouchableHighlight 
            activeOpacity={0.6}
             underlayColor="transparent"
            style={{height:26,width:26,justifyContent:'center',alignItems:'center'}}
             // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              //activeOpacity={10.00}
            onPress={showMenu}>
              <Image
              style={{height:'100%',width:'100%'}}
              resizeMode='contain'
              source={require('../../assets/Icons/menu.png')} />
            </TouchableHighlight>}
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
              onPress={Subscribe}>Subscribe</MenuItem>
            <MenuItem
              style={styles.itemSeperator}
              onPress={Logout}>Logout</MenuItem>
            

{/* <FlatList  
                    data={[  
                        {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                        {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'},  
                        {key: 'Python'},{key: 'Ajax'}, {key: 'C++'},  
                        {key: 'Ruby'},{key: 'Rails'},{key: '.Net'},  
                        {key: 'Perl'},{key: 'Sap'},{key: 'Python'},  
                        {key: 'Ajax'}, {key: 'C++'},{key: 'Ruby'},  
                        {key: 'Rails'},{key: '.Net'},{key: 'Perl'}  
                    ]}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}  
                    
                />   */}

          </Menu>
          

        </TouchableOpacity>
      </View>
    </View>

  );
}

export default connect()(CustomHeader);