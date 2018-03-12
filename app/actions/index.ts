export default interface Action<T> {
  type: string;
  payload?: T;
  error?: boolean,
  meta?: any
};

export const TEAMS_FETCH = 'TEAMS_FETCH';