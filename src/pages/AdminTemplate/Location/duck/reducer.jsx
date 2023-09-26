import {
  MANAGE_LOCATION_REQUEST,
  MANAGE_LOCATION_SUCCESS,
  MANAGE_LOCATION_FAIL,
  DELETE_LOCATION_REQUEST,
  DELETE_LOCATION_SUCCESS,
  DELETE_LOCATION_FAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null
};

const manageLocationReducer = (state = initailState, action) => {
  switch (action.type) {
    case MANAGE_LOCATION_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case MANAGE_LOCATION_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case MANAGE_LOCATION_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const deleteLocationReducer = (state = initailState, action) => {
  switch (action.type) {
    case DELETE_LOCATION_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case DELETE_LOCATION_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case DELETE_LOCATION_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

export { manageLocationReducer, deleteLocationReducer };
