import { combineReducers } from 'redux';

import authReducer from './../pages/AdminTemplate/AuthPage/duck/reducer';
import registerReducer from './../pages/AdminTemplate/RegisterPage/duck/reducer';

import {
  manageUserReducer,
  deleteUserReducer,
} from './../pages/AdminTemplate/User/duck/reducer';

import {
  updateUserReducer,
  detailUserReducer,
  uploadUserImgReducer,
} from './../pages/AdminTemplate/User/EditUser/duck/reducer';

const rootReducer = combineReducers({
  authReducer,
  registerReducer,

  manageUserReducer,
  deleteUserReducer,

  detailUserReducer,
  updateUserReducer,
  uploadUserImgReducer,
});

export default rootReducer;
