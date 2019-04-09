import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "./modules/store";
import App from './App';

import history from "./modules/history";

ReactDOM.render(
	<Provider store={store}>
			<Router history={history} >
				<App />
			</Router>
	</Provider>
	, document.getElementById('root'));
