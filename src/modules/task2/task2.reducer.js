import { createReducer } from "redux-act";

import * as actions from "./task2.actions";

const initialState = {
	data: []
};

const reducer = {
	[actions.setData]: (state, data) => ({
		...state,
		data,
	})
};


export default createReducer(reducer, initialState);
