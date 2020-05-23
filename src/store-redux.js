import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { boardReducer } from "./lib/board";

const reducers = combineReducers({
  board: boardReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
