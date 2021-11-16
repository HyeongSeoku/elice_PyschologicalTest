import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { combineReducers } from "redux";
import requestData_reducer, { dataInit } from "./reducer/requestData";
import user_reducer, { setUser } from "./reducer/userData";

const reducer = combineReducers({
  requestData: requestData_reducer,
  userData: user_reducer,
});

const store = createStore(reducer, composeWithDevTools());

//action 통합 관리
export const actionCreators = {
  setUser,
};

store.subscribe(() => console.log("상태변경:", store.getState()));

export default store;
