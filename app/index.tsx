import * as React from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from "react-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as injectTapEventPlugin from "react-tap-event-plugin";

import Main from "./components/main";
import reducer from './reducers';

const styles = require('./styles/global.less');
const store = createStore(reducer);

injectTapEventPlugin();

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Main/>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app') as HTMLElement
);
