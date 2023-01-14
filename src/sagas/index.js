import { all, fork } from "redux-saga/effects";
import userSagas from "./user.js";

export default function* rootSaga() {
  yield all([...userSagas]);
}
