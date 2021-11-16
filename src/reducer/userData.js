import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const setUser = createAction("SET_USER");
export const resetUser = createAction("RESET_USER"); //유저 리셋

const initState = { name: "", gender: "" };

//sub reducer
const user_reducer = createReducer(initState, {
  [setUser]: (state, { payload }) => {
    return { name: payload.name, gender: payload.gender };
  },
  [resetUser]: () => ({
    name: "",
    gender: "",
  }),
});

export default user_reducer;
