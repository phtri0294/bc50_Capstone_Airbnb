import {
    ADD_NEW_LOCATION_REQUEST,
    ADD_NEW_LOCATION_SUCCESS,
    ADD_NEW_LOCATION_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actAddNewLocation = (formData, navigate) => {
    return (dispatch) => {
        dispatch(actAddNewRequest());
        api.post('phong-thue', formData)
            .then((result) => {
                dispatch(actAddNewSuccess(result.data.content));
                alert('Bạn đã thêm phòng mới thành công!');
                navigate("/admin/Location", { replace: true });
            })
            .catch((error) => {
                dispatch(actAddNewFail(error));
                alert(error.message);
            })
    };
};

const actAddNewRequest = () => {
    return {
        type: ADD_NEW_LOCATION_REQUEST,
    };
};

const actAddNewSuccess = (data) => {
    return {
        type: ADD_NEW_LOCATION_SUCCESS,
        payload: data
    };
};

const actAddNewFail = (error) => {
    return {
        type: ADD_NEW_LOCATION_FAIL,
        payload: error 
    };
};

export default actAddNewLocation ;
