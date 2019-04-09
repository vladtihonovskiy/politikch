/* eslint-disable react/prefer-stateless-function,react/jsx-no-bind,react/forbid-prop-types,react/sort-prop-types,react/no-unused-prop-types */
import React, { Component, Fragment } from 'react'
import { object, string, bool, func, array, any } from "prop-types";

class Table extends Component {
    static propTypes = {
        data: array,
    }

    render() {
        const { data: {id, number, firstName, lastName} } = this.props;

        return(
            <tr>
                <td>
                    <a href={`/councillors/${id}`}>Details</a>
                </td>
                <td>
                    {id}
                </td>
                <td>
                    {number ? number: 0}
                </td>
                <td>
                    {firstName}
                </td>
                <td>
                    {lastName}
                </td>
            </tr>
        )
    }
}

export default Table;
