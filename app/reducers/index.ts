import { combineReducers } from 'redux';
import Action from '../actions';
import TeamPayload from '../actions/teams';

import {
  TEAMS_SELECT,
  TEAMS_FETCH,
  TEAMS_REQUEST,
  TEAMS_RECEIVE
} from '../actions';

function teamIdReducer(state: number=null, action: Action<TeamPayload>) {
  switch (action.type) {
    case TEAMS_SELECT:
      return action.payload.team;
    default:
      return state;
  }
}

function teamsReducer(state: object={}, action: Action<TeamPayload>) {
  switch (action.type) {
    case TEAMS_REQUEST:
      return Object.assign({}, state, {
        meta: {
          isFetching: true,
          requestedAt: action.meta.requestedAt
        }
      });
    case TEAMS_RECEIVE:
      return Object.assign({}, state, {
        data: action.payload.data,
        meta: {
          isFetching: false,
          receivedAt: action.meta.receivedAt
        },
      });
    default:
      return state;
  }
}

function dataByTeamReducer(state: any={}, action: Action<TeamPayload>) {
  switch(action.type) {
    case TEAMS_REQUEST:
    case TEAMS_RECEIVE:
      return Object.assign({}, state, {
        [action.payload.team]: teamsReducer(state[action.payload.team], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  teamId: teamIdReducer,
  teams: dataByTeamReducer
})

export default rootReducer;