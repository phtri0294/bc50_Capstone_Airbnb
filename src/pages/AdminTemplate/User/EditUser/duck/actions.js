import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_IMG_REQUEST,
    UPDATE_USER_IMG_SUCCESS,
    UPDATE_USER_IMG_FAIL,
    DETAIL_USER_REQUEST,
    DETAIL_USER_SUCCESS,
    DETAIL_USER_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actUpdateUser = (id, formData, navigate) => {
    return (dispatch) => {
        dispatch(actUpdateRequest());
        api.put(`users/${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateSuccess(result.data.content));
                    alert('Cập nhật thông tin người dùng thành công');
                    navigate('/admin/User', { replace: true })
                }
            })
            .catch((error) => {
                dispatch(actUpdateFail(error));
                alert(error.message);
            });
    };
};

const actUpdateRequest = () => {
    return {
        type: UPDATE_USER_REQUEST,
    };
};

const actUpdateSuccess = (data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: data,
    };
};

const actUpdateFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error,
    };
};

const actUploadUserImg = (formData) => {
    return (dispatch) => {
        dispatch(actUploadImgRequest());
        api.post(`users/upload-avatar`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadImgSuccess(result.data.content));
                    alert('Cập nhật hình ảnh người dùng thành công');
                }
            })
            .catch((error) => {
                dispatch(actUploadImgFail(error));
                alert(error.message);
            });
    };
};

const actUploadImgRequest = () => {
    return {
        type: UPDATE_USER_IMG_REQUEST,
    };
};

const actUploadImgSuccess = (data) => {
    return {
        type: UPDATE_USER_IMG_SUCCESS,
        payload: data,
    };
};

const actUploadImgFail = (error) => {
    return {
        type: UPDATE_USER_IMG_FAIL,
        payload: error,
    };
};

const actDetailUser = (id) => {
    return (dispatch) => {
      dispatch(actDetailRequest());
      api.get(`users/${id}`)
        .then((result) => {
          if (result.data.statusCode === 200) {
            dispatch(actDetailSuccess(result.data.content));
          }
        })
        .catch((error) => {
          dispatch(actDetailFail(error));
        });
    };
  };
  
const actDetailRequest = () => {
    return {
        type: DETAIL_USER_REQUEST,
    };
};

const actDetailSuccess = (data) => {
    return {
        type: DETAIL_USER_SUCCESS,
        payload: data,
    };
};

const actDetailFail = (error) => {
    return {
        type: DETAIL_USER_FAIL,
        payload: error,
    };
};

export { actUpdateUser, actDetailUser, actUploadUserImg };

