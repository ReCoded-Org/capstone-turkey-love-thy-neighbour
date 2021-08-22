import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import popupReducer from "./slices/popupSlice";

const rootReducer = combineReducers({
  user: userReducer,
  popup: popupReducer,
});

export default rootReducer;
