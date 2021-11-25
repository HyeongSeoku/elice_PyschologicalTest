import { createAction, createReducer } from "@reduxjs/toolkit";

export const nameToggle = createAction("NAME_TOGGLE");
export const genderToggle = createAction("GENDER_TOGGLE");
export const testTypeToggle = createAction("TEST_TYPE_TOGGLE");
export const pageToggle = createAction("PAGE_TOGGLE");
export const initPage = createAction("INIT_PAGE");

const initState = {
  nameToggle: false,
  genderToggle: false,
  testTypeToggle: false,
  pageToggle: [{ page: "0", disable: true }],
};

const toggle_reducer = createReducer(initState, {
  [nameToggle]: (state, { payload }) => {
    return {
      nameToggle: payload.nameToggle,
      genderToggle: false,
      testTypeToggle: false,
      pageToggle: state.pageToggle,
    };
  },
  [genderToggle]: (state, { payload }) => {
    return {
      nameToggle: false,
      genderToggle: payload.genderToggle,
      testTypeToggle: false,
      pageToggle: state.pageToggle,
    };
  },
  [testTypeToggle]: (state, { payload }) => {
    return {
      nameToggle: false,
      genderToggle: false,
      testTypeToggle: payload.testTypeToggle,
      pageToggle: state.pageToggle,
    };
  },
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
      nameToggle: state.nameToggle,
      genderToggle: state.genderToggle,
      testTypeToggle: state.testTypeToggle,
      pageToggle: newPageToggle,
    };
  },
});

export default toggle_reducer;
