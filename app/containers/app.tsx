import * as React from "react";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { deepOrange500 } from 'material-ui/styles/colors';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';

import NavBar from "./navbar";
import ReleaseMetadata from "../components/release/metadata";
import Teams from "../containers/teams";

const styles = require("./main.module.less");
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar/>
        <Route path="/teams" component={Teams}/>
        <Route exact path='/' component={Teams}/>
      </MuiThemeProvider>
    )
  }
}

export default connect((state: any) => {
  return { location: state.router.location };
})(App);
