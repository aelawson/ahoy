import * as React from "react";

import {deepOrange500} from 'material-ui/styles/colors';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';

import NavBar from "./navbar";
import ReleaseMetadata from "../components/release/metadata";
import Teams from "../containers/teams";

const styles = require("./main.module.less");
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <NavBar/>
          <Teams/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
