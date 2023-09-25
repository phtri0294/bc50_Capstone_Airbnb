import {
    UPDATE_BOOK_ROOM_REQUEST,
    UPDATE_BOOK_ROOM_SUCCESS,
    UPDATE_BOOK_ROOM_FAIL,
    UPDATE_BOOK_ROOMIMG_REQUEST,
    UPDATE_BOOK_ROOMIMG_SUCCESS,
    UPDATE_BOOK_ROOMIMG_FAIL,
    SET_BOOK_ROOM_DETAIL,
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

const actDetailBookRoom = (id) => ({
    type: SET_BOOK_ROOM_DETAIL,
    payload: id,
});

const actUploadBookRoomImg = (formData) => {
    return (dispatch) => {
        dispatch(actUploadBookRoomImgRequest());
        api.post(`dat-phong/upload-hinh-phong`, formData)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actUploadBookRoomImgSuccess(result.data.content));
                    alert('Cập nhật hình ảnh phòng thành công');
                }
            })
            .catch((error) => {
                dispatch(actUploadBookRoomImgFail(error));
                alert(error.message);
            });
    };
};

const actUploadBookRoomImgRequest = () => {
    return {
        type: UPDATE_BOOK_ROOMIMG_REQUEST,
    };
};

const actUploadBookRoomImgSuccess = (data) => {
    return {
        type: UPDATE_BOOK_ROOMIMG_SUCCESS,
        payload: data,
    };
};

const actUploadBookRoomImgFail = (error) => {
    return {
        type: UPDATE_BOOK_ROOMIMG_FAIL,
        payload: error,
    };
};

export { actUpdateBookRoom, actDetailBookRoom, actUploadBookRoomImg };

