import {
    ADD_NEW_ROOM_REQUEST,
    ADD_NEW_ROOM_SUCCESS,
    ADD_NEW_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actAddNewRoom = (formData, navigate) => {
    return (dispatch) => {
        dispatch(actAddNewRequest());
        api.post('phong-thue', formData)
            .then((result) => {
                dispatch(actAddNewSuccess(result.data.content));
                alert('Bạn đã thêm phòng mới thành công!');
                navigate("/admin/Room", { replace: true });
            })
            .catch((error) => {
                dispatch(actAddNewFail(error));
                alert(error.message);
            })
    };
};

const actAddNewRequest = () => {
    return {
        type: ADD_NEW_ROOM_REQUEST,
    };
};

const actAddNewSuccess = (data) => {
    return {
        type: ADD_NEW_ROOM_SUCCESS,
        payload: data
    };
};

const actAddNewFail = (error) => {
    return {
        type: ADD_NEW_ROOM_FAIL,
        payload: error 
    };
};

export default actAddNewRoom ;
