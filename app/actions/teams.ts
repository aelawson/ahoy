import * as yaml from 'yamljs';
import { Dispatch } from 'react-redux';

import Action from './';
import { TEAMS_FETCH } from './';

const config = yaml.load('../config.yaml');

export function getTeams() : Action<void> {
  return {
    type: TEAMS_FETCH
  };
}