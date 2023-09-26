import { combineReducers } from 'redux';

import authReducer from './../pages/AdminTemplate/AuthPage/duck/reducer';
import registerReducer from './../pages/AdminTemplate/RegisterPage/duck/reducer';

import {
  manageUserReducer,
  deleteUserReducer,
} from './../pages/AdminTemplate/User/duck/reducer';

import detailUserReducer from './../pages/AdminTemplate/User/EditUser/duck/reducer';

import {
  manageBookRoomReducer,
  deleteBookRoomReducer,
} from './../pages/AdminTemplate/BookRoom/duck/reducer';

import {
  updateBookRoomReducer,
  detailBookRoomReducer,
  uploadBookRoomImgReducer,
} from './../pages/AdminTemplate/BookRoom/EditBookRoom/duck/reducer';

import {
  manageRoomReducer,
  deleteRoomReducer,
} from './../pages/AdminTemplate/Room/duck/reducer';

import {
  updateRoomReducer,
  detailRoomReducer,
  uploadRoomImgReducer,
} from './../pages/AdminTemplate/Room/EditRoom/duck/reducer';

import {
  manageLocationReducer,
  deleteLocationReducer,
} from './../pages/AdminTemplate/Location/duck/reducer';

import {
  updateLocationReducer,
  detailLocationReducer,
  uploadLocationImgReducer,
} from './../pages/AdminTemplate/Location/EditLocation/duck/reducer';

import HometemplateManageRoomReducer from './../pages/HomeTemplate/HomePage/ListRoom/duck/reducer';

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

  manageRoomReducer,
  deleteRoomReducer,

  detailRoomReducer,
  updateRoomReducer,
  uploadRoomImgReducer,

  manageLocationReducer,
  deleteLocationReducer,

  detailLocationReducer,
  updateLocationReducer,
  uploadLocationImgReducer,

  HometemplateManageRoomReducer,
});

export default rootReducer;
