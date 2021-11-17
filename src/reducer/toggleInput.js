import { createAction, createReducer } from "@reduxjs/toolkit";

export const nameToggle = createAction("NAME_TOGGLE");
export const genderToggle = createAction("GENDER_TOGGLE");
export const testTypeToggle = createAction("TEST_TYPE_TOGGLE");

const initState = {
  nameToggle: false,
  genderToggle: false,
  testTypeToggle: false,
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
});

export default toggle_reducer;
