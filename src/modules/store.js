import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import task2 from "./task2/task2.reducer";

import { watchFetchUser } from "./task2/task2.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ task2});

const store = createStore(rootReducer, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))
sagaMiddleware.run(watchFetchUser);


export default store;
