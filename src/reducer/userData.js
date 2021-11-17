import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const setUserName = createAction("SET_USER_NAME");
export const setUserGender = createAction("SET_USER_GENDER");
export const setUserTestType = createAction("SET_USER_TEST_TYPE");
export const resetUser = createAction("RESET_USER"); //유저 리셋

const initState = { name: "", gender: "", testType: "" };

//sub reducer
const user_reducer = createReducer(initState, {
  [setUserName]: (state, { payload }) => {
    return {
      name: payload.name,
      gender: state.gender,
      testType: state.testType,
    };
  },
  [setUserGender]: (state, { payload }) => {
    return {
      name: state.name,
      gender: payload.gender,
      testType: state.testType,
    };
  },
  [setUserTestType]: (state, { payload }) => {
    return {
      name: state.name,
      gender: state.gender,
      testType: payload.testType,
    };
  },
  [resetUser]: () => ({
    name: "",
    gender: "",
    testType: "",
  }),
});

export default user_reducer;
