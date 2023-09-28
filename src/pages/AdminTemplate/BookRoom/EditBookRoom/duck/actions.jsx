import {
    UPDATE_BOOK_ROOM_REQUEST,
    UPDATE_BOOK_ROOM_SUCCESS,
    UPDATE_BOOK_ROOM_FAIL,
    DETAIL_BOOK_ROOM_REQUEST,
    DETAIL_BOOK_ROOM_SUCCESS,
    DETAIL_BOOK_ROOM_FAIL,
} from './constants';
import api from 'utils/apiUtil';

const actUpdateBookRoom = (id, formData, navigate) => {
    return (dispatch) => {
        dispatch(actUpdateBookRoomRequest());
        api.put(`dat-phong/${id}`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUpdateBookRoomSuccess(result.data.content));
                    alert('Cập nhật thông tin đặt phòng thành công');
                    navigate('/admin/book-room', { replace: true })
                }
            })
            .catch((error) => {
                dispatch(actUpdateBookRoomFail(error));
                alert(error.message);
            });
    };
};

const actUpdateBookRoomRequest = () => {
    return {
        type: UPDATE_BOOK_ROOM_REQUEST,
    };
};

const actUpdateBookRoomSuccess = (data) => {
    return {
        type: UPDATE_BOOK_ROOM_SUCCESS,
        payload: data,
    };
};

const actUpdateBookRoomFail = (error) => {
    return {
        type: UPDATE_BOOK_ROOM_FAIL,
        payload: error,
    };
};

const actDetailBookRoom = (id) => {
    return (dispatch) => {
        dispatch(actDetailRequest());
        api.get(`dat-phong/${id}`)
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


export { actUpdateBookRoom, actDetailBookRoom };

