import { createAction, createReducer } from "@reduxjs/toolkit";

export const pageToggle = createAction("PAGE_TOGGLE");
export const initPage = createAction("INIT_PAGE");

const initState = {
  pageToggle: [{ page: "0", disable: true }],
};

const toggle_reducer = createReducer(initState, {
  [initPage]: (state, { payload }) => {
    state.pageToggle.push({ page: payload.page, disable: true });
  },
  [pageToggle]: (state, { payload }) => {
    const newPageToggle = state.pageToggle.map((data) => {
      //3항 연산자 사용
      return data.page === payload.page
        ? { ...data, disable: payload.disable }
        : data;
    });
    return {
      pageToggle: newPageToggle,
    };
  },
});

export default toggle_reducer;
