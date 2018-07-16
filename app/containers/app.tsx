import * as React from "react";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import NavBar from "./navbar";
import Teams from "./teams";
import TeamReleases from './team-releases.container';

const styles = require("./main.module.less");
const ConnectedSwitch = connect<any, any>((state:any) => ({
  location: state.router.location
}))(Switch)

class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <NavBar/>
        <ConnectedSwitch>
          <Route path="/teams/:id" component={TeamReleases}/>
          <Route path="/teams" component={Teams}/>
          <Route exact path='/' component={Teams}/>
        </ConnectedSwitch>
      </div>
    )
  }
}

export default connect((state: any) => {
  return { location: state.router.location };
})(App);
