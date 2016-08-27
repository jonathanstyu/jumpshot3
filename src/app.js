import React, {Component} from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import PlayerSelectScreen from './screens/PlayerSelectScreen';

export default class App extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'playerSelect':
        return (<PlayerSelectScreen />)
        break;
      default:

    }
  }

  render() {
    return(
      <Navigator
        initialRoute={{
          title: "Player Select",
          id: "playerSelect"
        }}
        renderScene={this.renderScene}
        />
    )
  }
}
