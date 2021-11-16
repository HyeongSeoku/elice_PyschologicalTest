import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const dataInit = createAction("DATA_INIT");

const initState = {
  questionList: [],
};

//sub reducer
const requestData_reducer = createReducer(initState, {
  [dataInit]: (state, action) => {
    state.push({
      question: action.question,
      answer01: action.answer01,
      answer02: action.answer02,
      answer03: action.answer03,
      answer04: action.answer04,
      answerScore01: action.answerScore01,
      answerScore02: action.answerScore02,
    });
  },
});

export default requestData_reducer;
