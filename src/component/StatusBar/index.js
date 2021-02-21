import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import colors from "../colors";
class Statusbar extends Component {
  render() {
    return (
      
        <StatusBar translucent barStyle="light-content" />
    );
  }
}


export default Statusbar;
