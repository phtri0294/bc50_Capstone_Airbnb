import {
    MANAGE_USER_REQUEST,
    MANAGE_USER_SUCCESS,
    MANAGE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actManageUser = (keyword = '') => {
    return (dispatch) => {
        dispatch(actManageRequest());
        if (keyword !== '') {
            return api.get(`users/search/${keyword}`)
                .then((result) => {
                    dispatch(actManageSuccess(result.data.content));
                })
                .catch((error) => {
                    dispatch(actManageFail(error));
                });
        } else {
            return api.get(`users`)
                .then((result) => {
                    dispatch(actManageSuccess(result.data.content));
                })
                .catch((error) => {
                    dispatch(actManageFail(error));
                });
        }
    };
};

const actManageRequest = () => {
    return {
        type: MANAGE_USER_REQUEST,
    };
};

const actManageSuccess = (data) => {
    return {
        type: MANAGE_USER_SUCCESS,
        payload: data
    };
};

const actManageFail = (error) => {
    return {
        type: MANAGE_USER_FAIL,
        payload: error
    };
};

const actDeleteUser = (id) => {
    return (dispatch) => {
        dispatch(actDeleteRequest());
        api.delete(`users?id=${id}`)
            .then((result) => {
                dispatch(actDeleteSuccess(result.data.content));
                alert('Bạn đã xóa người dùng thành công!');
            })
            .catch((error) => {
                dispatch(actDeleteFail(error));
                alert(error.message);
            })
    };
};

const actDeleteRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    };
};

const actDeleteSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data
    };
};

const actDeleteFail = (error) => {
    return {
        type: DELETE_USER_FAIL,
        payload: error
    };
};

export { actManageUser, actDeleteUser };