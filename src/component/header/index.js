import React, { useEffect } from 'react';
import {Image, ImageBackground, View,Text, TouchableOpacity} from 'react-native';
//import Statusbar from '../../../common/Statusbar';
import styles from './style';
import {connect} from 'react-redux';


const CustomHeader= props=> {
  return (
        <View style={styles.header}>
        </View>
    
  );
}

export default connect()(CustomHeader);
