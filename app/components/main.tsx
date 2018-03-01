import * as React from "react";

import {deepOrange500} from 'material-ui/styles/colors';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';

import NavBar from "./navbar";
import ReleaseMetadata from "./release/metadata";

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
          <ReleaseMetadata/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Main;
