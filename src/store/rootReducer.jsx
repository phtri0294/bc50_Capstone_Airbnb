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

import {
  manageBookRoomReducer,
  deleteBookRoomReducer,
} from './../pages/AdminTemplate/BookRoom/duck/reducer';

import {
  updateBookRoomReducer,
  detailBookRoomReducer,
  uploadBookRoomImgReducer,
} from './../pages/AdminTemplate/BookRoom/EditBookRoom/duck/reducer';

const rootReducer = combineReducers({
  authReducer,
  registerReducer,

  manageUserReducer,
  deleteUserReducer,

  detailUserReducer,
  updateUserReducer,
  uploadUserImgReducer,

  manageBookRoomReducer,
  deleteBookRoomReducer,
  
  updateBookRoomReducer,
  detailBookRoomReducer,
  uploadBookRoomImgReducer,
});

export default rootReducer;
