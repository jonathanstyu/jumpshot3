import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/app';
import {Provider} from 'react-redux';
import store from './src/jumpApp';

class jumpshot3 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('jumpshot3', () => jumpshot3);
