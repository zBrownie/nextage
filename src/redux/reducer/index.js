import { combineReducers } from "redux";

import ClienteReducer from "./cliente";
import UtilsReducer from "./utils";
const rootReducer = combineReducers({
  cliente: ClienteReducer,
  utils: UtilsReducer,
});

export default rootReducer;
