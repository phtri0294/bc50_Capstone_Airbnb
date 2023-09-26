import {
  UPDATE_LOCATION_REQUEST,
  UPDATE_LOCATION_SUCCESS,
  UPDATE_LOCATION_FAIL,
  UPDATE_LOCATION_IMG_REQUEST,
  UPDATE_LOCATION_IMG_SUCCESS,
  UPDATE_LOCATION_IMG_FAIL,
  DETAIL_LOCATION_REQUEST,
  DETAIL_LOCATION_SUCCESS,
  DETAIL_LOCATION_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
  infoLocation: undefined
};

const initialStateLocation = {
  locationDetail: {},
};

const detailLocationReducer = (state = initialStateLocation, action) => {
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

const updateLocationReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_LOCATION_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_LOCATION_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const uploadLocationImgReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_LOCATION_IMG_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_LOCATION_IMG_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_LOCATION_IMG_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};


export { detailLocationReducer, updateLocationReducer, uploadLocationImgReducer };

