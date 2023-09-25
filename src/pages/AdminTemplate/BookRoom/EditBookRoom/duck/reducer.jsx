import {
  UPDATE_BOOK_ROOM_REQUEST,
  UPDATE_BOOK_ROOM_SUCCESS,
  UPDATE_BOOK_ROOM_FAIL,
  UPDATE_BOOK_ROOMIMG_REQUEST,
  UPDATE_BOOK_ROOMIMG_SUCCESS,
  UPDATE_BOOK_ROOMIMG_FAIL,
  SET_BOOK_ROOM_DETAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
  infoBookRoom: undefined
};

const initialStateBookRoom = {
  roomDetail: {},
};

const detailBookRoomReducer = (state = initialStateBookRoom, action) => {
  switch (action.type) {
    case SET_BOOK_ROOM_DETAIL:
      return { ...state, bookRoomDetail: action.payload };
    default:
      return state;
  }
};

const updateBookRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_BOOK_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_BOOK_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_BOOK_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const uploadBookRoomImgReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_BOOK_ROOMIMG_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_BOOK_ROOMIMG_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_BOOK_ROOMIMG_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};


export { detailBookRoomReducer, updateBookRoomReducer, uploadBookRoomImgReducer };

