import {
  MANAGE_ROOM_REQUEST,
  MANAGE_ROOM_SUCCESS,
  MANAGE_ROOM_FAIL,
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

export default actManageRoom;
