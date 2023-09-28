import {
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

export default detailRoomReducer;

