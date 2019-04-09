/* eslint-disable react/prefer-stateless-function,react/jsx-no-bind,react/forbid-prop-types,react/sort-prop-types,react/no-unused-prop-types */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, withRouter, Link, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { object, string, bool, func, array, any } from "prop-types";

import MainPage from './solution2/containers/MainPage/MainPage';

import 'react-toastify/dist/ReactToastify.css';
import routes from "./constants/routes";

import classNames from "classnames";
import classes from "./App.less";


class App extends Component {
	render() {
		return(
			<div>
				<ToastContainer />
				<Switch>
					<Route
						exact
						path={routes.homePage}
						component={MainPage}
					/>
				</Switch>
			</div>
		)
	}
}


export default App;
