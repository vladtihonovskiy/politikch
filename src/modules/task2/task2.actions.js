
import { createAction } from "redux-act";

export const fetchDataSaga = createAction('fetch data saga', (url, params, sort) => ({ url, params, sort }));
export const setData = createAction('set data');
