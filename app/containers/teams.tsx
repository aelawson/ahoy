import * as React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import { fetchTeams } from '../actions/teams';

export class Teams extends React.Component<any, any> {

  componentWillMount() {
    this.props.fetchTeams();
  }

  goToTeamReleases(history: any, id: number) {
    return (event: React.MouseEvent<any>) : void => {
      let url: string = `/teams/${id}`;
      history.push(url);
    };
  };

  render() {
    const { teams, history } = this.props;
    if (teams.meta && !teams.meta.isFetching) {
      return (
        <Container>
          <Row>
            <Col sm="12">
              <h3>Teams</h3>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Releases</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    teams.data.map((team: any) => {
                      return (
                        <tr>
                          <th scope="row">{team.id}</th>
                          <td>{team.name}</td>
                          <td>{team.description}</td>
                          <td>
                            <Button onClick={this.goToTeamReleases(history, team.id)} color="primary">
                              Releases
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
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
