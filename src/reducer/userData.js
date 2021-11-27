import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const setUserData = createAction("SET_USER_DATA");
export const setAnswers = createAction("SET_ANSWERS");
export const initAnswers = createAction("INIT_ANSWERS");
export const resetUser = createAction("RESET_USER"); //유저 리셋
export const resultAnswers = createAction("RESULT_ANSWERS"); //서버로부터 받은 결과
export const maxAnswer = createAction("MAX_ANSWER");

const initState = {
  name: "",
  gender: "",
  testType: "",
  startDtm: "",
  answers: [{ id: "0", result: "" }],
  resultAnswers: [],
  maxAnswer: [],
};

//sub reducer
const user_reducer = createReducer(initState, {
  [setUserData]: (state, { payload }) => {
    return {
      name: payload.name,
      gender: payload.gender,
      testType: payload.testType,
      startDtm: state.startDtm,
      answers: state.answers,
      resultAnswers: state.resultAnswers,
      maxAnswer: state.maxAnswer,
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
      resultAnswers: state.resultAnswers,
      maxAnswer: state.maxAnswer,
    };
  },
  [resultAnswers]: (state, { payload }) => {
    state.resultAnswers.push({ id: payload.id, value: payload.value });
  },
  [maxAnswer]: (state, { payload }) => {
    state.maxAnswer.push({ id: payload.id, value: payload.value });
  },

  [resetUser]: () => ({
    name: "",
    gender: "",
    testType: "",
    startDtm: "",
    answers: [],
    resultAnswer: [],
    maxAnswer: [],
  }),
});

export default user_reducer;
