import {
  MANAGE_ROOM_REQUEST,
  MANAGE_ROOM_SUCCESS,
  MANAGE_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  DELETE_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actManageRoom = () => {
  return (dispatch) => {
    dispatch(actManageRoomRequest());
    api.get('phong-thue')
      .then((result) => {
        if (result.data.statusCode === 200) {
          dispatch(actManageRoomSucess(result.data.content));
        }
      })
      .catch((error) => {
        dispatch(actManageRoomFail(error));
      })
  };
};

const actManageRoomRequest = () => {
  return {
    type: MANAGE_ROOM_REQUEST,
  };
};

const actManageRoomSucess = (data) => {
  return {
    type: MANAGE_ROOM_SUCCESS,
    payload: data
  };
};

const actManageRoomFail = (error) => {
  return {
    type: MANAGE_ROOM_FAIL,
    payload: error
  };
};

const actDeleteRoom = (id) => {
  return (dispatch) => {
    dispatch(actDeleteRoomRequest());
    api.delete(`phong-thue/${id}`)
      .then((result) => {
        dispatch(actDeleteRoomSuccess(result.data.content));
        alert('Bạn đã xóa căn phòng thành công!');
      })
      .catch((error) => {
        dispatch(actDeleteRoomFail(error));
        alert(error.message);
      })
  };
};

const actDeleteRoomRequest = () => {
  return {
    type: DELETE_ROOM_REQUEST,
  };
};

const actDeleteRoomSuccess = (data) => {
  return {
    type: DELETE_ROOM_SUCCESS,
    payload: data
  };
};

const actDeleteRoomFail = (error) => {
  return {
    type: DELETE_ROOM_FAIL,
    payload: error
  };
};

export { actManageRoom, actDeleteRoom };
