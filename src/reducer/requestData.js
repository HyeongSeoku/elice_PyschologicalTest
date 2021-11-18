import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const dataInit = createAction("DATA_INIT");

const initState = {
  questionList: [],
};

//sub reducer
const requestData_reducer = createReducer(initState, {
  [dataInit]: (state, { payload }) => {
    state.questionList.push({
      question: payload.question,
      answer01: payload.answer01,
      answer02: payload.answer02,
      answer03: payload.answer03,
      answer04: payload.answer04,
      answerScore01: payload.answerScore01,
      answerScore02: payload.answerScore02,
      qitemNo: payload.qitemNo,
    });
  },
});

export default requestData_reducer;
