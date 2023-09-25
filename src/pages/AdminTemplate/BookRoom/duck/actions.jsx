import {
  MANAGE_BOOK_ROOM_REQUEST,
  MANAGE_BOOK_ROOM_SUCCESS,
  MANAGE_BOOK_ROOM_FAIL,
  DELETE_BOOK_ROOM_REQUEST,
  DELETE_BOOK_ROOM_SUCCESS,
  DELETE_BOOK_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';
//
const actManageBookRoom = () => {
  return (dispatch) => {
    dispatch(actManageBookRoomRequest());
    api.get('dat-phong')
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actManageBookRoomSucess(result.data.content));
        }
      })
      .catch((error) => {
        dispatch(actManageBookRoomFail(error));
      })
  };
};

const actSearchBookRoom = (searchTerm) => {
  if (searchTerm.trim() != '') {
    return (dispatch) => {
      dispatch(actManageBookRoomRequest());
      api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${searchTerm}`)
        .then((result) => {
          if (result.data.statusCode === 200) {
            dispatch(actManageBookRoomSucess(result.data.content));
          }
        })
        .catch((error) => {
          dispatch(actManageBookRoomFail(error));
        })
    };
  };
};

const actManageBookRoomRequest = () => {
  return {
    type: MANAGE_BOOK_ROOM_REQUEST,
  };
};

const actManageBookRoomSucess = (data) => {
  return {
    type: MANAGE_BOOK_ROOM_SUCCESS,
    payload: data
  };
};

const actManageBookRoomFail = (error) => {
  return {
    type: MANAGE_BOOK_ROOM_FAIL,
    payload: error
  };
};

const actDeleteBookRoom = (id) => {
  return (dispatch) => {
    dispatch(actDeleteBookRoomRequest());
    api.delete(`dat-phong/${id}`)
      .then((result) => {
        dispatch(actDeleteBookRoomSuccess(result.data.content));
        alert('Bạn đã xóa căn phòng thành công!');
      })
      .catch((error) => {
        dispatch(actDeleteBookRoomFail(error));
        alert(error.message);
      })
  };
};

const actDeleteBookRoomRequest = () => {
  return {
    type: DELETE_BOOK_ROOM_REQUEST,
  };
};

const actDeleteBookRoomSuccess = (data) => {
  return {
    type: DELETE_BOOK_ROOM_SUCCESS,
    payload: data
  };
};

const actDeleteBookRoomFail = (error) => {
  return {
    type: DELETE_BOOK_ROOM_FAIL,
    payload: error
  };
};

export { actManageBookRoom, actSearchBookRoom, actDeleteBookRoom };
