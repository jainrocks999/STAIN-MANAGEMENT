import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import colors from '../colors';
class Statusbar extends Component {
  render() {
    return (
      <StatusBar hidden="false" translucent="false" barStyle="dark-content" />
    );
  }
}

export default Statusbar;
