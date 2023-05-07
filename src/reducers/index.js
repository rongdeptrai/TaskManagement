import { combineReducers } from "redux";
import board from "./boardReducer";
import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import stateHistoryEnhancer from "./stateHistoryEnhancer";

const rootReducer = combineReducers({
  board: stateHistoryEnhancer(board),
  authentication,
  users,
  alert,
});

export default rootReducer;
