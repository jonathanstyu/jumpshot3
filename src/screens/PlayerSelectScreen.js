import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import Player from '../models/player';
import PlayerSelectCell from './PlayerSelectCell';
import {connect} from 'react-redux';

class PlayerSelectScreen extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var players = this.props.players;
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(players),
      players: players
    }
  }

  _renderRow(rowData, sectionID: number, rowID: number) {
    return (
      <PlayerSelectCell player={rowData} playerRow={rowID}/>
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

const mapStateToProps = (state) => {
  return {
    players: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelectScreen);
