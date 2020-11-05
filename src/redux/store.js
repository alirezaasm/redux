import {applyMiddleware, createStore} from 'redux'
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import start from "./saga";

// const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk));
// saga.run(start)
export default store;
