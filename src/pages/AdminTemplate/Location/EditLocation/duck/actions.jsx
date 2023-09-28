import {
    UPDATE_LOCATION_REQUEST,
    UPDATE_LOCATION_SUCCESS,
    UPDATE_LOCATION_FAIL,
    UPDATE_LOCATION_IMG_REQUEST,
    UPDATE_LOCATION_IMG_SUCCESS,
    UPDATE_LOCATION_IMG_FAIL,
    DETAIL_LOCATION_REQUEST,
    DETAIL_LOCATION_SUCCESS,
    DETAIL_LOCATION_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actUpdateLocation = (id, formData, navigate) => {
    return (dispatch) => {
        dispatch(actUpdateRequest());
        api.put(`vi-tri/${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateSuccess(result.data.content));
                    alert('Cập nhật thông tin vị trí thành công');
                    navigate('/admin/Location', { replace: true })
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
        type: UPDATE_LOCATION_REQUEST,
    };
};

const actUpdateSuccess = (data) => {
    return {
        type: UPDATE_LOCATION_SUCCESS,
        payload: data,
    };
};

const actUpdateFail = (error) => {
    return {
        type: UPDATE_LOCATION_FAIL,
        payload: error,
    };
};

const actUploadLocationImg = (id, formData) => {
    return (dispatch) => {
        dispatch(actUploadImgRequest());
        api.post(`vi-tri/upload-hinh-vitri?maViTri=${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadImgSuccess(result.data.content));
                    alert('Cập nhật hình ảnh vị trí thành công');
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
        type: UPDATE_LOCATION_IMG_REQUEST,
    };
};

const actUploadImgSuccess = (data) => {
    return {
        type: UPDATE_LOCATION_IMG_SUCCESS,
        payload: data,
    };
};

const actUploadImgFail = (error) => {
    return {
        type: UPDATE_LOCATION_IMG_FAIL,
        payload: error,
    };
};

const actDetailLocation = (id) => {
    return (dispatch) => {
      dispatch(actDetailRequest());
      api.get(`vi-tri/${id}`)
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
        type: DETAIL_LOCATION_REQUEST,
    };
};

const actDetailSuccess = (data) => {
    return {
        type: DETAIL_LOCATION_SUCCESS,
        payload: data,
    };
};

const actDetailFail = (error) => {
    return {
        type: DETAIL_LOCATION_FAIL,
        payload: error,
    };
};

export { actUpdateLocation, actDetailLocation, actUploadLocationImg };

