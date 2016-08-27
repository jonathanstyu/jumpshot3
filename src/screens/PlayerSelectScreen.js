import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import Player from '../models/player';
import PlayerSelectCell from './PlayerSelectCell';

export default class PlayerSelectScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var players = Player.createDummyData();
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(players),
      players: players
    }
  }

  _renderRow(rowData) {
    return (
      <PlayerSelectCell player={rowData}/>
    )
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View style={styles.separator} key={rowID} />
    )
  }

  render() {
    return(
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderSeparator={this._renderSeparator}
        renderRow={this._renderRow}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  separator: {
    backgroundColor: "black",
    height: 1
  }
})
