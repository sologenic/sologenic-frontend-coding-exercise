import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions";

const initial = { users: null };

const users = createReducer(initial.users, {
  [actions.user.fillUsers]: (state, { payload }) => {
    return payload;
  },
});

export default {
  users,
};
