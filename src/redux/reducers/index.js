import { combineReducers } from "redux";
import walletReducer from "./walletReducer"
import toDoReducer from "./toDoListReducer"
import apiReducer from "./apiReducer"

const reducers = {
    wallet: walletReducer,
    toDoList: toDoReducer,
    api: apiReducer
}

const reducer = combineReducers(reducers)

export default reducer