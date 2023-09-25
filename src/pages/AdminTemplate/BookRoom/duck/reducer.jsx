import {
  MANAGE_BOOK_ROOM_REQUEST,
  MANAGE_BOOK_ROOM_SUCCESS,
  MANAGE_BOOK_ROOM_FAIL,
  DELETE_BOOK_ROOM_REQUEST,
  DELETE_BOOK_ROOM_SUCCESS,
  DELETE_BOOK_ROOM_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null
};

const manageBookRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case MANAGE_BOOK_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case MANAGE_BOOK_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case MANAGE_BOOK_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const deleteBookRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case DELETE_BOOK_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case DELETE_BOOK_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case DELETE_BOOK_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

export { manageBookRoomReducer, deleteBookRoomReducer };
