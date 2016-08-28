import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import Player from '../models/player';
import _ from 'lodash';

export default class PlayerSelectCell extends Component {
  render() {
    var player = this.props.player;
    return (
      <View style={styles.view}>
        <Text style={styles.playerNameText}>{player.name}</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.props.touchButtonTeamOne}>
            <Text style={[styles.buttonText, this.props.onTeamOne && styles.buttonSelectTeam1]}>Team 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.props.touchButtonTeamTwo}>
            <Text style={[styles.buttonText, this.props.onTeamTwo && styles.buttonSelectTeam2]}>Team 2</Text>
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

const mapStateToProps = (state, ownProps) => {
  var playerRow = parseInt(ownProps.playerRow);
  return {
    onTeamOne: (state.teamOne.indexOf(playerRow) >= 0),
    onTeamTwo: (state.teamTwo.indexOf(playerRow) >= 0)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    touchButtonTeamOne: (event) => {
      dispatch({type: "SELECT_TEAM_ONE", playerRow: ownProps.playerRow})
    },
    touchButtonTeamTwo: (event) => {
      dispatch({type: "SELECT_TEAM_TWO", playerRow: ownProps.playerRow})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectCell);
