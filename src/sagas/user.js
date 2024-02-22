import { fork, put, takeLatest } from "redux-saga/effects";
import getUsersData from "./getUsersData";
import actions from "../actions";

function* fetchUsersSaga() {
  yield takeLatest(`${actions.user.fetchUsers}`, fetchUsersCall);
}

function* fetchUsersCall() {
  // We already helped you with the fetch of the users
  // You can use the method getUsersData to retrieve the data.
  // Notice that this is a generator function and some of the syntax is different.
  // Feel free to search on how sagas work and what you need to do.
}

export default [fork(fetchUsersSaga)];
