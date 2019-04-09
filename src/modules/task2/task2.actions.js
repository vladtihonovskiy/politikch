
import { createAction } from "redux-act";

export const loginSaga = createAction('login saga', (email, password) => ({ email, password }));
export const loginAdmin = createAction('login admin');


// logout
export const logoutStore = createAction("logout / store");
// local storage
export const addToLocalStorage = createAction('add to localStore saga', (key, value) => {

});

export const removeToLocalStorage = createAction('remove to localStore saga', (key) => {

});
