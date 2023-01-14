import { fork, put, takeLatest } from "redux-saga/effects";
import getUsersData from "./getUsersData";
import actions from "../actions";

function* fetchUsersSaga() {
  yield takeLatest(`${actions.user.fetchUsers}`, fetchUsersCall);
}

function* fetchUsersCall() {
  // We already helped you with the fetch of the users
  // You can use the method getUsersData to retrieve the data.
}

export default [fork(fetchUsersSaga)];
