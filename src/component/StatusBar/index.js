import React from 'react';

import { StatusBar } from 'react-native';
import colors from '../../component/colors';
export default function Status() {
  return (
    <StatusBar
      backgroundColor={colors.darkOrange}
      barStyle='light-content'
    />
  );
}