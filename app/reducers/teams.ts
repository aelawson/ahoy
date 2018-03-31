import { combineReducers } from 'redux';

import Action from '../actions';
import TeamPayload from '../actions/teams';

import {
  TEAMS_SELECT,
  TEAMS_FETCH,
  TEAM_REQUEST,
  TEAM_RECEIVE,
  TEAMS_REQUEST,
  TEAMS_RECEIVE
} from '../actions';

export function teamIdReducer(state: number=null, action: Action<TeamPayload>) {
  switch (action.type) {
    case TEAMS_SELECT:
      return action.payload.team;
    default:
      return state;
  }
}

export function teamReducer(state: object={}, action: Action<TeamPayload>) {
  switch (action.type) {
    case TEAM_REQUEST:
      return Object.assign({}, state, {
        meta: {
          isFetching: true,
          requestedAt: action.meta.requestedAt
        }
      });
    case TEAM_RECEIVE:
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

export function teamsReducer(state: object={}, action: Action<TeamPayload>) {
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

export function dataByTeamReducer(state: any={}, action: Action<TeamPayload>) {
  switch(action.type) {
    case TEAMS_REQUEST:
    case TEAMS_RECEIVE:
      return Object.assign({}, state, {
        [action.payload.team]: teamReducer(state[action.payload.team], action)
      });
    default:
      return state;
  }
}
