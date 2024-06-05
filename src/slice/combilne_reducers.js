import { combineReducers } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  productReducer  from "./productSlice";
import  productEditReducer  from "./productEditSlice";
import  unitReducer  from "./unitSlice";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  unit: unitReducer,
  productedit: productEditReducer,
});

export default rootReducer;