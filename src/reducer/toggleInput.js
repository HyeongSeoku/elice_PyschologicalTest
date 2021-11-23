import { createAction, createReducer } from "@reduxjs/toolkit";

export const nameToggle = createAction("NAME_TOGGLE");
export const genderToggle = createAction("GENDER_TOGGLE");
export const testTypeToggle = createAction("TEST_TYPE_TOGGLE");
export const pageToggle = createAction("PAGE_TOGGLE");

const initState = {
  nameToggle: false,
  genderToggle: false,
  testTypeToggle: false,
  pageToggle: [],
};

const toggle_reducer = createReducer(initState, {
  [nameToggle]: (state, { payload }) => {
    return {
      nameToggle: payload.nameToggle,
      genderToggle: false,
      testTypeToggle: false,
    };
  },
  [genderToggle]: (state, { payload }) => {
    return {
      nameToggle: false,
      genderToggle: payload.genderToggle,
      testTypeToggle: false,
    };
  },
  [testTypeToggle]: (state, { payload }) => {
    return {
      nameToggle: false,
      genderToggle: false,
      testTypeToggle: payload.testTypeToggle,
    };
  },
  [pageToggle]: (state, { payload }) => {
    state.pageToggle.map((data) =>
      //3항 연산자 사용
      data.id === payload.id ? { ...data, isDone: payload.value } : data
    );
  },
});

export default toggle_reducer;
