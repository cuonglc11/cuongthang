import { combineReducers } from "redux";
import actionForReducer from "./infoReducer";
const reducers = combineReducers({
   personaiInfo  : actionForReducer
})
export default (state , action) = reducers(state  , action)