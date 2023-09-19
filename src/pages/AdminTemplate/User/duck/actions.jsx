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
        dispatch(actUserRequest());
        if (keyword !== '') {
            return api.get(`users/search/${keyword}`)
                .then((result) => {
                    console.log(result.data)
                    dispatch(actUserSuccess(result.data.content));
                })
                .catch((error) => {
                    dispatch(actUserFail(error));
                });
        } else {
            return api.get(`users`)
                .then((result) => {
                    console.log(result.data)
                    dispatch(actUserSuccess(result.data.content));
                })
                .catch((error) => {
                    dispatch(actUserFail(error));
                });
        }
    };
};

const actUserRequest = () => {
    return {
        type: MANAGE_USER_REQUEST,
    };
};

const actUserSuccess = (data) => {
    return {
        type: MANAGE_USER_SUCCESS,
        payload: data
    };
};

const actUserFail = (error) => {
    return {
        type: MANAGE_USER_FAIL,
        payload: error
    };
};

const actDeleteUser = (id) => {
    return (dispatch) => {
        dispatch(actDeleteUserRequest());
        api.delete(`users?id=${id}`)
            .then((result) => {
                dispatch(actDeleteUserSuccess(result.data.content));
                alert('Bạn đã xóa người dùng thành công!');
            })
            .catch((error) => {
                dispatch(actDeleteUserFail(error));
                alert(error.message);
            })
    };
};

const actDeleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    };
};

const actDeleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data
    };
};

const actDeleteUserFail = (error) => {
    return {
        type: DELETE_USER_FAIL,
        payload: error
    };
};

export { actManageUser, actDeleteUser };