import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USERIMG_REQUEST,
  UPDATE_USERIMG_SUCCESS,
  UPDATE_USERIMG_FAIL,
  SET_USER_DETAIL,
} from './constants';

const initailState = {
  loading: false,
  data: null,
  error: null,
  infoUser: undefined
};

const initialStateUser = {
  userDetail: null,
};

const detailUserReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return { ...state, userDetail: action.payload };
    default:
      return state;
  };
};

const updateUserReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_USER_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_USER_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};

const uploadUserImgReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_USERIMG_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    };
    case UPDATE_USERIMG_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    };
    case UPDATE_USERIMG_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    };
    default:
      return { ...state };
  };
};


export { updateUserReducer, detailUserReducer, uploadUserImgReducer };

