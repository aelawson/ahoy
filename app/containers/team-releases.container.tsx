import * as React from 'react';

import Status from '../components/team-release/status.component';
import Content from '../components/team-release/content.component';
import { Container } from 'reactstrap';

class TeamReleases extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <Status/>
        <Content/>
      </Container>
    );
  }
}

export default TeamReleases;
