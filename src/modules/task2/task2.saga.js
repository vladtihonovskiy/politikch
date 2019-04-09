
import * as taskActions from "./task2.actions";
import { takeEvery, put, select } from "redux-saga/effects";
import api from "../../api";


function* fetchTaskData(data) {
	try {
		const params = data.payload.params ? data.payload.params : "";
		const result = yield api.task.fetchData(data.payload.url + params);
		if(data.payload.sort  && data.payload.sort !== 'unset' ) {
			if(data.payload.sort === "up") {
				result.data.sort((a, b) => a.id - b.id);
			} else {
				result.data.sort((a, b) => b.id - a.id);
			}
		}
		yield put(taskActions.setData(result.data));
	} catch (error) {

	}
}

export function* watchTask() {
	yield takeEvery(taskActions.fetchDataSaga, fetchTaskData);
}


