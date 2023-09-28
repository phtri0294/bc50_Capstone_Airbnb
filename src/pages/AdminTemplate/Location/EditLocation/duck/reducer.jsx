import {
  DETAIL_LOCATION_REQUEST,
  DETAIL_LOCATION_SUCCESS,
  DETAIL_LOCATION_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
};

const detailLocationReducer = (state = initailState, action) => {
  switch (action.type) {
    case DETAIL_LOCATION_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case DETAIL_LOCATION_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case DETAIL_LOCATION_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

export default detailLocationReducer;

