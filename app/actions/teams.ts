import 'whatwg-fetch';
import * as yaml from 'yamljs';
import { Dispatch } from 'react-redux';
import Action from './';
import {
  TEAMS_SELECT,
  TEAMS_FETCH,
  TEAMS_REQUEST,
  TEAMS_RECEIVE
} from './';

// const config : any = yaml.load('../config.yaml');

export default interface TeamPayload {
  team: number;
  data: object;
};

export function selectTeam(team: number) {
  return {
    type: TEAMS_SELECT,
    payload: { team }
  }
}

export function requestTeam(team: number) : Action<object> {
  return {
    type: TEAMS_REQUEST,
    payload: { team },
    meta: {
      requestedAt: Date.now()
    }
  };
}

export function receiveTeam(team: number, data: object) : Action<object> {
  return {
    type: TEAMS_RECEIVE,
    payload: { team, data },
    meta: {
      receivedAt: Date.now()
    }
  };
}

export function fetchTeam(team: number) : any {
  let url: string = `http://localhost:8000/teams/${team}/`;

  return (dispatch : Dispatch<object>) => {
    dispatch(requestTeam(team));

    return fetch(url)
    .then((response: any) => response.json())
    .then((json : object) => dispatch(receiveTeam(team, json)))
  };
}