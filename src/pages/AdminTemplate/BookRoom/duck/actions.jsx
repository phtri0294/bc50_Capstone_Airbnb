import {
  MANAGE_BOOK_ROOM_REQUEST,
  MANAGE_BOOK_ROOM_SUCCESS,
  MANAGE_BOOK_ROOM_FAIL,
  DELETE_BOOK_ROOM_REQUEST,
  DELETE_BOOK_ROOM_SUCCESS,
  DELETE_BOOK_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actManageBookRoom = () => {
  return (dispatch) => {
    dispatch(actManageRequest());
    api.get('dat-phong')
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actManageSucess(result.data.content));
        }
      })
      .catch((error) => {
        dispatch(actManageFail(error));
      })
  };
};

const actManageRequest = () => {
  return {
    type: MANAGE_BOOK_ROOM_REQUEST,
  };
};

const actManageSucess = (data) => {
  return {
    type: MANAGE_BOOK_ROOM_SUCCESS,
    payload: data
  };
};

const actManageFail = (error) => {
  return {
    type: MANAGE_BOOK_ROOM_FAIL,
    payload: error
  };
};

const actDeleteBookRoom = (id) => {
  return (dispatch) => {
    dispatch(actDeleteRequest());
    api.delete(`dat-phong/${id}`)
      .then((result) => {
        dispatch(actDeleteSuccess(result.data.content));
        alert('Bạn đã xóa đặt phòng thành công!');
      })
      .catch((error) => {
        dispatch(actDeleteFail(error));
        alert(error.message);
      })
  };
};

const actDeleteRequest = () => {
  return {
    type: DELETE_BOOK_ROOM_REQUEST,
  };
};

const actDeleteSuccess = (data) => {
  return {
    type: DELETE_BOOK_ROOM_SUCCESS,
    payload: data
  };
};

const actDeleteFail = (error) => {
  return {
    type: DELETE_BOOK_ROOM_FAIL,
    payload: error
  };
};

export { actManageBookRoom, actDeleteBookRoom };
