import { combineReducers } from "redux";
import userReducer from "./userSlice";
import popupReducer from "./popupSlice";

const rootReducer = combineReducers({
  user: userReducer,
  popup: popupReducer,
});

export default rootReducer;
