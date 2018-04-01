import * as React from "react";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { deepOrange500 } from 'material-ui/styles/colors';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import NavBar from "./navbar";
import Teams from "./teams";
import TeamReleases from './team-releases.container';

const styles = require("./main.module.less");
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const ConnectedSwitch = connect<any, any>((state:any) => ({
  location: state.router.location
}))(Switch)

class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar/>
        <ConnectedSwitch>
          <Route path="/teams/:id" component={TeamReleases}/>
          <Route path="/teams" component={Teams}/>
          <Route exact path='/' component={Teams}/>
        </ConnectedSwitch>
      </MuiThemeProvider>
    )
  }
}

export default connect((state: any) => {
  return { location: state.router.location };
})(App);
