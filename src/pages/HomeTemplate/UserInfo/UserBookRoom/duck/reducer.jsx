import {
  DETAIL_BOOK_ROOM_REQUEST,
  DETAIL_BOOK_ROOM_SUCCESS,
  DETAIL_BOOK_ROOM_FAIL,
  DETAIL_ROOM_REQUEST,
  DETAIL_ROOM_SUCCESS,
  DETAIL_ROOM_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
};

const HomeTemplateDetailBookRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case DETAIL_BOOK_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case DETAIL_BOOK_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case DETAIL_BOOK_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const HomeTemplateDetailRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case DETAIL_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case DETAIL_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case DETAIL_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

export {HomeTemplateDetailBookRoomReducer,HomeTemplateDetailRoomReducer} ;