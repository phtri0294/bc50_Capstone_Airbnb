import { combineReducers } from 'redux';

import authReducer from './../pages/AdminTemplate/AuthPage/duck/reducer';
import registerReducer from './../pages/AdminTemplate/RegisterPage/duck/reducer';

import manageUserReducer from './../pages/AdminTemplate/User/duck/reducer';
import detailUserReducer from './../pages/AdminTemplate/User/EditUser/duck/reducer';

import manageRoomReducer from './../pages/AdminTemplate/Room/duck/reducer';
import detailRoomReducer from './../pages/AdminTemplate/Room/EditRoom/duck/reducer';

import manageBookRoomReducer from './../pages/AdminTemplate/BookRoom/duck/reducer';
import detailBookRoomReducer from './../pages/AdminTemplate/BookRoom/EditBookRoom/duck/reducer';

import manageLocationReducer from './../pages/AdminTemplate/Location/duck/reducer';
import detailLocationReducer from './../pages/AdminTemplate/Location/EditLocation/duck/reducer';

import HometemplateManageRoomReducer from './../pages/HomeTemplate/HomePage/ListRoom/duck/reducer';
import HomeTemplateDetailUserReducer from './../pages/HomeTemplate/UserInfo/duck/reducer';

const rootReducer = combineReducers({
  authReducer,
  registerReducer,

  manageUserReducer,
  detailUserReducer,

  manageRoomReducer,
  detailRoomReducer,

  manageBookRoomReducer,
  detailBookRoomReducer,

  manageLocationReducer,
  detailLocationReducer,


  HometemplateManageRoomReducer,
  HomeTemplateDetailUserReducer,
});

export default rootReducer;
