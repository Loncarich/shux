import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/app';
import Landing from './components/landingComponent';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Profile from './components/profileComponent';

import reducers from './reducers';
import {persistStore, autoRehydrate} from 'redux-persist'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers,window.devToolsExtension ? window.devToolsExtension() : f => f,autoRehydrate());
persistStore(store);

	ReactDOM.render(
  	<Provider store={store}>
  		<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Router history={browserHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={Landing} />
						<Route path="login" component={Login} />
						<Route path="signup" component={Signup} />
						<Route path="profile" component={Profile} />
					</Route>
				</Router>
			</MuiThemeProvider>
		</Provider>, document.getElementById('app'));