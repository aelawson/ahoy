import * as React from 'react';

import Card from 'material-ui/Card';

import Status from '../components/team-release/status.component';
import Content from '../components/team-release/content.component';

class TeamReleases extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Status/>
        <Content/>
      </div>
    );
  }
}

export default TeamReleases;
