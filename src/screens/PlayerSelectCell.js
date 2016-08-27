import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import Player from '../models/player';

export default class PlayerSelectCell extends Component {
  constructor(props) {
    super(props)
    this._teamOneSelected = this._teamOneSelected.bind(this);
    this._teamTwoSelected = this._teamTwoSelected.bind(this);
    this.state = {
      teamOneActive: false,
      teamTwoActive: false
    }
  }

  _teamOneSelected() {
    this.setState({
      teamOneActive: !this.state.teamOneActive
    })
  }

  _teamTwoSelected() {
    this.setState({
      teamTwoActive: !this.state.teamTwoActive
    })
  }

  render() {
    var player = this.props.player;
    return (
      <View style={styles.view}>
        <Text style={styles.playerNameText}>{player.name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this._teamOneSelected}>
            <Text style={[styles.buttonText, this.state.teamOneActive && styles.buttonSelectTeam1]}>Team 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._teamTwoSelected}>
            <Text style={[styles.buttonText, this.state.teamTwoActive && styles.buttonSelectTeam2]}>Team 2</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    padding: 15,
    flex: 1,
    flexDirection: 'row'
  },
  playerNameText: {
    flex: 1,
    textAlignVertical: 'center',
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: 'powderblue'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: "row"
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
    margin: 5
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  buttonSelectTeam1: {
    backgroundColor: 'red'
  },
  buttonSelectTeam2: {
    backgroundColor: 'green'
  }
})
