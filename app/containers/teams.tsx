import * as React from 'react';
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List';

import { fetchTeams } from '../actions/teams';
import Team from '../components/team';

export class Teams extends React.Component<any, any> {

  componentWillMount() {
    this.props.fetchTeams();
  }

  render() {
    const { teams } = this.props;
    if (teams.meta && !teams.meta.isFetching) {
      return (
        <div>
          {
            teams.data.map((team: object) => {
              return <Team/>
            })
          }
        </div>
      );
    }
    else {
      return (
        <div>Loading...</div>
      );
    }
  }
}

const mapStateToProps = (state : any) => {
  return {
    teams: state.teams
  };
};

export default connect(
  mapStateToProps,
  { fetchTeams }
)(Teams);
