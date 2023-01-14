import { fork, put, takeLatest } from "redux-saga/effects";
import getUsersData from "./getUsersData";
import actions from "../actions";

function* fetchUsersSaga() {
  yield takeLatest(`${actions.user.fetchUsers}`, fetchUsersCall);
}

function* fetchUsersCall() {
  const data = yield getUsersData();

  yield put(actions.user.fillUsers(data));
}

export default [fork(fetchUsersSaga)];
