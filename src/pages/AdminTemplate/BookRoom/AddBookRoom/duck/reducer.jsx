import {
    ADD_NEW_BOOK_ROOM_REQUEST,
    ADD_NEW_BOOK_ROOM_SUCCESS,
    ADD_NEW_BOOK_ROOM_FAIL,
} from './constants';

const initailState = {
    loading: false,
    data: null,
    error: null,
};

const addNewBookRoomReducer = (state = initailState, action) => {
    switch (action.type) {
        case ADD_NEW_BOOK_ROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        };
        case ADD_NEW_BOOK_ROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        };
        case ADD_NEW_BOOK_ROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        };
        default:
            return { ...state };
    };
};

export default addNewBookRoomReducer;