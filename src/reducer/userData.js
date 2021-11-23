import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const setUserName = createAction("SET_USER_NAME");
export const setUserGender = createAction("SET_USER_GENDER");
export const setUserTestType = createAction("SET_USER_TEST_TYPE");
export const setAnswers = createAction("SET_ANSWERS");
export const resetUser = createAction("RESET_USER"); //유저 리셋

const initState = {
  name: "",
  gender: "",
  testType: "",
  answers: [
    { id: 0, result: "" },
    { id: "1_1", result: "" },
  ],
};

//sub reducer
const user_reducer = createReducer(initState, {
  [setUserName]: (state, { payload }) => {
    return {
      name: payload.name,
      gender: state.gender,
      testType: state.testType,
      answers: state.answers,
    };
  },
  [setUserGender]: (state, { payload }) => {
    return {
      name: state.name,
      gender: payload.gender,
      testType: state.testType,
      answers: state.answers,
    };
  },
  [setUserTestType]: (state, { payload }) => {
    return {
      name: state.name,
      gender: state.gender,
      testType: payload.testType,
      answers: state.answers,
    };
  },
  [setAnswers]: (state, { payload }) => {
    console.log(typeof payload.result);
    state.answers.map((item) =>
      //id 값이 존재하면 값 수정, 존재하지 않으면 값 삽입
      item.id === payload.id
        ? { ...item, result: payload.result }
        : state.answers.push({ id: payload.id, result: payload.result })
    );
  },
  [resetUser]: () => ({
    name: "",
    gender: "",
    testType: "",
    answers: [],
  }),
});

export default user_reducer;
