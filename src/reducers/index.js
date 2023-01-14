import { combineReducers } from "@reduxjs/toolkit";
import userReducers from "./user";

export default function createRootReducer() {
  return combineReducers({
    ...userReducers,
  });
}
