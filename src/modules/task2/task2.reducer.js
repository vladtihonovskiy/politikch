import { createReducer } from "redux-act";

import * as actions from "./task2.actions";


const initialState = {
	data: []
};

const reducer = {
	[actions.loginAdmin]: (state, name) => ({
		...state,
		user: name,
	}),
	[actions.logoutStore]: (state) => ({
		...state,
		user: null,
	}),
	[actions.setAvatar]: (state, url) => ({
		...state,
		user: { ...state.user, avatarUrl: url },
	}),
};


export default createReducer(reducer, initialState);
