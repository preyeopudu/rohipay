import { combineReducers } from "redux";
import AuthReducer from "./authreducer";
import TokenReducer from "./tokenreducer";
import UserReducer from "./userreducer";
import MerchantReducer from "./merchantReducer";
import PersonalReducer from "./personalreducer";

const RootReducer = combineReducers({
  AuthReducer,
  TokenReducer,
  UserReducer,
  MerchantReducer,
  PersonalReducer,
});

export default RootReducer;
