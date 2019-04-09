/* eslint-disable react/prefer-stateless-function,react/jsx-no-bind,react/forbid-prop-types,react/sort-prop-types,react/no-unused-prop-types */
import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Switch, withRouter, Link } from "react-router-dom";
import Table from '../../components/Table';
import { object, string, bool, func, array, any } from "prop-types";

// import { LoaderContainer } from "./components/Loader/Loader";

import classNames from "classnames";

import "./MainPage.less";

import * as taskActions from "../../../modules/task2/task2.actions";


class MainPage extends Component {
    state = {
        requestPath: 'http://ws-old.parlament.ch/councillors?',
        sortByName: "",
        sortById: "unset",
    }

    static propTypes = {
        fetchDataSaga: func,
        data: array
    }

    componentDidMount() {
        const { fetchDataSaga } = this.props;

        const { requestPath } = this.state;

        fetchDataSaga(requestPath);
    }

    onNameChange = (event) => {
        const { fetchDataSaga } = this.props;

        const { requestPath } = this.state;

        this.setState({
            sortByName: event.target.value
        }, () => {
            if(this.state.sortByName !== "") {
                fetchDataSaga(requestPath, `collectionFilter=${this.state.sortByName}`, this.state.sortById);
            }
        })
    }

    onSortChange = (event) => {
        const { fetchDataSaga } = this.props;

        const { requestPath } = this.state;

        this.setState({
            sortById: event.target.value
        }, () =>{
            fetchDataSaga(requestPath,`collectionFilter=${this.state.sortByName}`, this.state.sortById);
        })
    }

    render() {
        const { data } = this.props;
        return(
            <Fragment>
            <div>
                <p>Sorting by id</p>
                <form onChange={this.onSortChange} name="myForm">
                    <input type="radio" value="up" name="sort"/> Up
                    <input type="radio" value="down" name="sort"/> Down
                    <input type="radio" value="unset" name="sort"/> Unset
                </form>
            </div>
            <div>
                <p>Sorting by name</p>
                <input onChange={this.onNameChange} id="nameInput" type="text"/>
            </div>

            <table>
                <tbody><tr>
                    <th></th>
                    <th>Id</th>
                    <th>Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </tbody>
            </table>
            <table>
                { data.map(item => {
                    return <Table key={item.id} data={item}/>
                }) }
            </table>

            </Fragment>
        )
    }
}

function mapStateToProps({ task2 }) {
    return {
        data: task2.data
    };
}

export default withRouter(connect(mapStateToProps, { ...taskActions })(MainPage));
