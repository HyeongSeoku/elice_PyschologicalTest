import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const setUserName = createAction("SET_USER_NAME");
export const setUserGender = createAction("SET_USER_GENDER");
export const setUserTestType = createAction("SET_USER_TEST_TYPE");
export const setAnswers = createAction("SET_ANSWERS");
export const initAnswers = createAction("INIT_ANSWERS");
export const resetUser = createAction("RESET_USER"); //유저 리셋

const initState = {
  name: "",
  gender: "",
  testType: "",
  startDtm: "",
  answers: [{ id: "0", result: "" }],
};

//sub reducer
const user_reducer = createReducer(initState, {
  [setUserName]: (state, { payload }) => {
    return {
      name: payload.name,
      gender: state.gender,
      testType: state.testType,
      startDtm: state.startDtm,
      answers: state.answers,
    };
  },
  [setUserGender]: (state, { payload }) => {
    return {
      name: state.name,
      gender: payload.gender,
      testType: state.testType,
      startDtm: state.startDtm,
      answers: state.answers,
    };
  },
  [setUserTestType]: (state, { payload }) => {
    return {
      name: state.name,
      gender: state.gender,
      testType: payload.testType,
      startDtm: payload.startDtm,
      answers: state.answers,
    };
  },
  [initAnswers]: (state, { payload }) => {
    state.answers.push({ id: payload.id, result: "" });
  },
  //오류 내용 ![setAnswers]의 arrow function을 {} 로 감싸면 return을 해주어야하는데 return 하는 값이 없어서 변화가 없음
  [setAnswers]: (state, { payload }) => {
    const newAnswers = state.answers.map((item) => {
      //id 값이 존재하면 해당 값 수정
      return item.id === payload.id
        ? {
            ...item,
            qitemNo: payload.qitemNo,
            result: payload.result,
            pageNo: payload.pageNo,
            answerScore: payload.answerScore,
          }
        : item;
    });
    return {
      name: state.name,
      gender: state.gender,
      testType: state.testType,
      startDtm: state.startDtm,
      answers: newAnswers,
    };
  },
  [resetUser]: () => ({
    name: "",
    gender: "",
    testType: "",
    startDtm: "",
    answers: [],
  }),
});

export default user_reducer;
