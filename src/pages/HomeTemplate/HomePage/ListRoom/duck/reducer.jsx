import {
  MANAGE_ROOM_REQUEST,
  MANAGE_ROOM_SUCCESS,
  MANAGE_ROOM_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null
};

const HometemplateManageRoomReducer = (state = initailState, action) => {
  switch (action.type) {
    case MANAGE_ROOM_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case MANAGE_ROOM_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case MANAGE_ROOM_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

export default HometemplateManageRoomReducer;
