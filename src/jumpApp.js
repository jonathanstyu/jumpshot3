import Player from './models/player';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';

const logger = createLogger();
var jumpApp = function (state, action) {
  if (typeof state === 'undefined') {
    return {
      players: Player.createDummyData(),
      teamOne: Immutable.List(),
      teamTwo: Immutable.List()
    }
  }

  switch (action.type) {
    case "SELECT_TEAM_ONE":
      var playerRow = parseInt(action.playerRow);
      var playerRowIndex = state.teamOne.indexOf(playerRow);
      if (playerRowIndex >= 0) {
        return Object.assign({}, state, {
          teamOne: state.teamOne.splice(playerRowIndex, 1)
        });
      } else {
        return Object.assign({}, state, {
          teamOne: state.teamOne.push(playerRow)
        });
      }

      break;
    case "SELECT_TEAM_TWO":
      var playerRow = parseInt(action.playerRow);
      var playerRowIndex = state.teamTwo.indexOf(playerRow);
      if (playerRowIndex >= 0) {
        return Object.assign({}, state, {
          teamTwo: state.teamTwo.splice(playerRowIndex, 1)
        });
      } else {
        return Object.assign({}, state, {
          teamTwo: state.teamTwo.push(playerRow)
        });
      }
      break;
    default:
      return state;
  }
}

export default store = createStore(jumpApp, applyMiddleware(logger));
