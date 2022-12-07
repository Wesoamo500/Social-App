import { combineReducers } from "redux";
import authReducers from "./authReducers";
import postReducer from "./postReducers";


export const reducers = combineReducers({authReducers,postReducer})