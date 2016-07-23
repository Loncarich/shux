import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 

import reducers from './reducers';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers,window.devToolsExtension ? window.devToolsExtension() : f => f);

	ReactDOM.render(
  	<Provider store={store}>
  		<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Router history={browserHistory}>
					<IndexRoute component={Landing} />
					<Route path='signin' component={Signin} />
					<Route path='signup' component={Signup} />
				</Router>
			</MuiThemeProvider>
		</Provider>, document.getElementById('app'));