import * as React from "react";
import * as ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as injectTapEventPlugin from "react-tap-event-plugin";

import Main from "./components/main";
const styles = require('./styles/global.less');

injectTapEventPlugin();

class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider>
        <Main/>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
