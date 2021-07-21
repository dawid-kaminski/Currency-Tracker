import { configureStore } from "@reduxjs/toolkit";
import todos from './todos'
import favouriteCurrencyList from "./favouriteCurrencyList";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos, favouriteCurrencyList
})

const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, undefined, middleware);

export default store
