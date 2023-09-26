import {
  UPDATE_ROOM_REQUEST,
  UPDATE_ROOM_SUCCESS,
  UPDATE_ROOM_FAIL,
  UPDATE_ROOM_IMG_REQUEST,
  UPDATE_ROOM_IMG_SUCCESS,
  UPDATE_ROOM_IMG_FAIL,
  DETAIL_ROOM_REQUEST,
  DETAIL_ROOM_SUCCESS,
  DETAIL_ROOM_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
  infoRoom: undefined
};

const initialStateRoom = {
  roomDetail: {},
};

const detailRoomReducer = (state = initialStateRoom, action) => {
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

const updateRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const uploadRoomImgReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_ROOM_IMG_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_ROOM_IMG_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_ROOM_IMG_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};


export { detailRoomReducer, updateRoomReducer, uploadRoomImgReducer };

