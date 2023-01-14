import { createAction } from "@reduxjs/toolkit";

export default {
  fetchUsers: createAction("user/fetchUsers"),
  fillUsers: createAction("user/fillUsers"),
};
