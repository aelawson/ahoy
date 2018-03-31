export default interface Action<T> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
};

export const TEAMS_FETCH = 'TEAMS_FETCH';
export const TEAM_REQUEST = 'TEAM_REQUEST';
export const TEAMS_REQUEST = 'TEAMS_REQUEST';
export const TEAM_RECEIVE = 'TEAM_RECEIVE';
export const TEAMS_RECEIVE = 'TEAMS_RECEIVE';
export const TEAMS_SELECT = 'TEAMS_SELECT';