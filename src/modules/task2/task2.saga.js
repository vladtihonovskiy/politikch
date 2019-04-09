import customToastify from '../../customFunction/customToastify';
import * as authAction from "./task2.actions";
import { takeEvery, put, select } from "redux-saga/effects";
import { postRequest } from "../../api";


function* fetchUser(data) {
	try {
		const result = yield postRequest("auth/signUp", {
			login: data.payload.email,
			password: data.payload.password
		});

		customToastify("Все топово");

		yield put(authAction.addToLocalStorage("user", "admin"));
		yield put(authAction.loginAdmin("admin"))
	} catch (error) {
		customToastify(error, "error");
	}
}

function* fetchLogout() {
	yield put(authAction.removeToLocalStorage("user"));
}

function *addToLocalStorage() {
	console.log("saga")
}

export function* watchFetchUser() {
	yield takeEvery(authAction.loginSaga, fetchUser);
	yield takeEvery(authAction.addToLocalStorage, addToLocalStorage);
	yield takeEvery(authAction.logoutStore, fetchLogout);
}


