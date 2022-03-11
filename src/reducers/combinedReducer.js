import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import progressReducer from "./progressReducer";
import signerReducer from "./singnerReducer";
import userReducer from "./userReducer";

const combinedReducer = combineReducers({
  document: documentReducer,
  user: userReducer,
  progress: progressReducer,
  singers: signerReducer,
});

export default combinedReducer;
