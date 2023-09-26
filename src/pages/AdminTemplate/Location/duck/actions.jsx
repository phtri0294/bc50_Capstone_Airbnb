import {
  MANAGE_LOCATION_REQUEST,
  MANAGE_LOCATION_SUCCESS,
  MANAGE_LOCATION_FAIL,
  DELETE_LOCATION_REQUEST,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actManageLocation = () => {
  return (dispatch) => {
    dispatch(actManageRequest());
    api.get('vi-tri')
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
    type: MANAGE_LOCATION_REQUEST,
  };
};

const actManageSucess = (data) => {
  return {
    type: MANAGE_LOCATION_SUCCESS,
    payload: data
  };
};

const actManageFail = (error) => {
  return {
    type: MANAGE_LOCATION_FAIL,
    payload: error
  };
};

const actDeleteLocation = (id) => {
  return (dispatch) => {
    dispatch(actDeleteRequest());
    api.delete(`vi-tri/${id}`)
      .then((result) => {
        dispatch(actDeleteSuccess(result.data.content));
        alert('Bạn đã xóa căn phòng thành công!');
      })
      .catch((error) => {
        dispatch(actDeleteFail(error));
        alert(error.message);
      })
  };
};

const actDeleteRequest = () => {
  return {
    type: DELETE_LOCATION_REQUEST,
  };
};

const actDeleteSuccess = (data) => {
  return {
    type: DELETE_LOCATION_SUCCESS,
    payload: data
  };
};

const actDeleteFail = (error) => {
  return {
    type: DELETE_LOCATION_FAIL,
    payload: error
  };
};

export { actManageLocation, actDeleteLocation };
