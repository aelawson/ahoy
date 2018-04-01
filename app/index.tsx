import * as React from "react";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App from './containers/app';
import Teams from './containers/teams';

import * as reducers from './reducers';
import { selectTeam, fetchTeam } from './actions/teams';

const history = createHistory();
const router = routerMiddleware(history);
const logger = createLogger();

console.log(reducers);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(
    router,
    logger,
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App}>
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app') as HTMLElement
);
