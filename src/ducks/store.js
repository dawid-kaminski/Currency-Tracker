import { configureStore } from "@reduxjs/toolkit";
import favouriteCurrencyList from "./favouriteCurrencyList";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  favouriteCurrencyList,
});

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store;
