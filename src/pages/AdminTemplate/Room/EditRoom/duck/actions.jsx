import {
    UPDATE_ROOM_REQUEST,
    UPDATE_ROOM_SUCCESS,
    UPDATE_ROOM_FAIL,
    UPDATE_ROOM_IMG_REQUEST,
    UPDATE_ROOM_IMG_SUCCESS,
    UPDATE_ROOM_IMG_FAIL,
    DETAIL_ROOM_REQUEST,
    DETAIL_ROOM_SUCCESS,
    DETAIL_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actUpdateRoom = (id, formData, navigate) => {
    return (dispatch) => {
        dispatch(actUpdateRequest());
        api.put(`phong-thue/${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateSuccess(result.data.content));
                    alert('Cập nhật thông tin phòng thành công');
                    navigate('/admin/Room', { replace: true })
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
        type: UPDATE_ROOM_REQUEST,
    };
};

const actUpdateSuccess = (data) => {
    return {
        type: UPDATE_ROOM_SUCCESS,
        payload: data,
    };
};

const actUpdateFail = (error) => {
    return {
        type: UPDATE_ROOM_FAIL,
        payload: error,
    };
};

const actUploadRoomImg = (id, formData) => {
    return (dispatch) => {
        dispatch(actUploadImgRequest());
        api.post(`phong-thue/upload-hinh-phong?maPhong=${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadImgSuccess(result.data.content));
                    alert('Cập nhật hình ảnh phòng thành công');
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
        type: UPDATE_ROOM_IMG_REQUEST,
    };
};

const actUploadImgSuccess = (data) => {
    return {
        type: UPDATE_ROOM_IMG_SUCCESS,
        payload: data,
    };
};

const actUploadImgFail = (error) => {
    return {
        type: UPDATE_ROOM_IMG_FAIL,
        payload: error,
    };
};

const actDetailRoom = (id) => {
    return (dispatch) => {
      dispatch(actDetailRequest());
      api.get(`phong-thue/${id}`)
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
        type: DETAIL_ROOM_REQUEST,
    };
};

const actDetailSuccess = (data) => {
    return {
        type: DETAIL_ROOM_SUCCESS,
        payload: data,
    };
};

const actDetailFail = (error) => {
    return {
        type: DETAIL_ROOM_FAIL,
        payload: error,
    };
};

export { actUpdateRoom, actDetailRoom, actUploadRoomImg };

