import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { combineReducers } from "redux";
import requestData_reducer, { dataInit } from "./reducer/requestData";
import toggle_reducer, { pageToggle, initPage } from "./reducer/toggleInput";
import user_reducer, {
  setUserData,
  initAnswers,
  setAnswers,
  resultAnswers,
  maxAnswer,
} from "./reducer/userData";

const reducer = combineReducers({
  requestData: requestData_reducer,
  userData: user_reducer,
  toggleData: toggle_reducer,
});

const store = createStore(reducer, composeWithDevTools());

//action 통합 관리
export const actionCreators = {
  //유저 세팅
  setUserData,
  initAnswers,
  setAnswers,
  resultAnswers,
  maxAnswer,
  //토글 액션
  pageToggle,
  initPage,
  //설문
  dataInit,
};

//store.subscribe(() => console.log("상태변경:", store.getState()));

export default store;
