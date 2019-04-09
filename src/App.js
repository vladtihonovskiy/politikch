/* eslint-disable react/prefer-stateless-function,react/jsx-no-bind,react/forbid-prop-types,react/sort-prop-types,react/no-unused-prop-types */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Switch, withRouter, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { object, string, bool, func, array, any } from "prop-types";

// import { LoaderContainer } from "./components/Loader/Loader";


import classNames from "classnames";
import classes from "./App.less";


class App extends Component {
	render() {
		return(
			<h1>Work</h1>
		)
	}
}


export default App;
