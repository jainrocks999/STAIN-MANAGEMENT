import React, { Component, useEffect } from 'react';

import RootApp from './src/Navigation/index'
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import Axios from 'axios';


//let Colordata='';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    //this.fetchDevice()
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={Store}>
          <RootApp />
        </Provider>
      </SafeAreaView>
    );
  }

}


