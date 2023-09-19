import { combineReducers } from "redux";

import {
  manageUserReducer,
  deleteUserReducer,
} from './../pages/AdminTemplate/User/duck/reducer';

import {
  updateUserReducer,
  detailUserReducer,
  uploadUserImgReducer,
} from "./../pages/AdminTemplate/User/EditUser/duck/reducer";

const rootReducer = combineReducers({
  manageUserReducer,
  deleteUserReducer,

  detailUserReducer,
  updateUserReducer,
  uploadUserImgReducer,

});

export default rootReducer;
