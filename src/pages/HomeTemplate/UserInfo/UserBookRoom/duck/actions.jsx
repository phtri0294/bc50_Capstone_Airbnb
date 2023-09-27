import {
    DETAIL_BOOK_ROOM_REQUEST,
    DETAIL_BOOK_ROOM_SUCCESS,
    DETAIL_BOOK_ROOM_FAIL,
    DETAIL_ROOM_REQUEST,
    DETAIL_ROOM_SUCCESS,
    DETAIL_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actDetailBookRoom = (id) => {
    return (dispatch) => {
        dispatch(actDetailRequest());
        api.get(`dat-phong/lay-theo-nguoi-dung/${id}`)
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
        type: DETAIL_BOOK_ROOM_REQUEST,
    };
};

const actDetailSuccess = (data) => {
    return {
        type: DETAIL_BOOK_ROOM_SUCCESS,
        payload: data,
    };
};

const actDetailFail = (error) => {
    return {
        type: DETAIL_BOOK_ROOM_FAIL,
        payload: error,
    };
};

const actDetailRoom = (id) => {
    return (dispatch) => {
        dispatch(actDetailRoomRequest());
        api.get(`phong-thue/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDetailRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actDetailRoomFail(error));
            });
    };
};

const actDetailRoomRequest = () => {
    return {
        type: DETAIL_ROOM_REQUEST,
    };
};

const actDetailRoomSuccess = (data) => {
    return {
        type: DETAIL_ROOM_SUCCESS,
        payload: data,
    };
};

const actDetailRoomFail = (error) => {
    return {
        type: DETAIL_ROOM_FAIL,
        payload: error,
    };
};
export { actDetailBookRoom, actDetailRoom };

