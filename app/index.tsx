import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Main from "./containers/main";
import rootReducer from './reducers';
import { selectTeam, fetchTeam } from './actions/teams';

const loggerMiddleware = createLogger();

const styles = require('./styles/global.less');
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

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
