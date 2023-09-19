import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USERIMG_REQUEST,
    UPDATE_USERIMG_SUCCESS,
    UPDATE_USERIMG_FAIL,
    SET_USER_DETAIL,
} from './constants';
import api from 'utils/apiUtil';

const actUpdateUser = (id, formData, navigate) => {
    return (dispatch) => {
        dispatch(actUpdateUserRequest());
        api.put(`users/${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateUserSuccess(result.data.content));
                    alert('Cập nhật thông tin người dùng thành công');
                    navigate('/admin/User', { replace: true })
                }
            })
            .catch((error) => {
                dispatch(actUpdateUserFail(error));
                alert(error.message);
            });
    };
};

const actUpdateUserRequest = () => {
    return {
        type: UPDATE_USER_REQUEST,
    };
};

const actUpdateUserSuccess = (data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: data,
    };
};

const actUpdateUserFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error,
    };
};

const actDetailUser = (id) => ({
    type: SET_USER_DETAIL,
    payload: id,
});

const actUploadUserImg = (formData) => {
    return (dispatch) => {
        dispatch(actUploadUserImgRequest());
        api.post(`users/upload-avatar`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadUserImgSuccess(result.data.content));
                    alert('Cập nhật hình ảnh người dùng thành công');
                }
            })
            .catch((error) => {
                dispatch(actUploadUserImgFail(error));
                alert(error.message);
            });
    };
};

const actUploadUserImgRequest = () => {
    return {
        type: UPDATE_USERIMG_REQUEST,
    };
};

const actUploadUserImgSuccess = (data) => {
    return {
        type: UPDATE_USERIMG_SUCCESS,
        payload: data,
    };
};

const actUploadUserImgFail = (error) => {
    return {
        type: UPDATE_USERIMG_FAIL,
        payload: error,
    };
};

export { actUpdateUser, actDetailUser, actUploadUserImg };

