import { createAction, createReducer } from "@reduxjs/toolkit";

//action
export const dataInit = createAction("DATA_INIT");

const initState = {
  questionList: [
    {
      question: "두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.",
      answer01: "첫번째 질문",
      answer02: "두번째 질문",
      answer03: "첫번째 질문 세부 설명",
      answer04: "두번째 질문 세부 설명",
      answerScore01: 1,
      answerScore02: 2,
      qitemNo: 0,
    },
  ],
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
