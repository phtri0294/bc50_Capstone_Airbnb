import { combineReducers } from 'redux';

import authReducer from './../pages/AdminTemplate/AuthPage/duck/reducer';
import registerReducer from './../pages/AdminTemplate/RegisterPage/duck/reducer';

import manageUserReducer from './../pages/AdminTemplate/User/duck/reducer';
import detailUserReducer from './../pages/AdminTemplate/User/EditUser/duck/reducer';

import manageRoomReducer from './../pages/AdminTemplate/Room/duck/reducer';
import detailRoomReducer from './../pages/AdminTemplate/Room/EditRoom/duck/reducer';

import {
  manageBookRoomReducer,
  deleteBookRoomReducer,
} from './../pages/AdminTemplate/BookRoom/duck/reducer';

import {
  updateBookRoomReducer,
  detailBookRoomReducer,
  uploadBookRoomImgReducer,
} from './../pages/AdminTemplate/BookRoom/EditBookRoom/duck/reducer';

import manageLocationReducer from './../pages/AdminTemplate/Location/duck/reducer';
import detailLocationReducer from './../pages/AdminTemplate/Location/EditLocation/duck/reducer';

import HometemplateManageRoomReducer from './../pages/HomeTemplate/HomePage/ListRoom/duck/reducer';

const rootReducer = combineReducers({
  authReducer,
  registerReducer,

  manageUserReducer,
  detailUserReducer,

  manageRoomReducer,
  detailRoomReducer,

  manageBookRoomReducer,
  deleteBookRoomReducer,

  updateBookRoomReducer,
  detailBookRoomReducer,
  uploadBookRoomImgReducer,

  manageLocationReducer,
  detailLocationReducer,


  HometemplateManageRoomReducer,
});

export default rootReducer;
