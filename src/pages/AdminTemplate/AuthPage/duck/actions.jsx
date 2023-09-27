import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CLEAR,
} from "./constants";
import api from "utils/apiUtil";

const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    api
      .post("auth/signin", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const previousRoute = localStorage.getItem("previousRoute");
          const user = result.data.content;
          let localStorageKey = "LOGIN_USER";
          let redirectRoute = "/";
          if (user.user.role === 'ADMIN') {
            localStorageKey = "LOGIN_ADMIN";
            redirectRoute = "/admin/User";
          }

          if (previousRoute) {
            localStorage.removeItem("previousRoute");
            navigate(previousRoute, { replace: true });
          } else {
            navigate(redirectRoute, { replace: true });
          }

          localStorage.setItem(localStorageKey, JSON.stringify(user));
          dispatch(actAuthSuccess(user));
        };
      })
      .catch((error) => {
        dispatch(actAuthFail(error.response.data.content));
      });
  };
};

const actLogout = (navigate) => {
  if (localStorage.getItem("LOGIN_ADMIN")) {
    localStorage.removeItem("LOGIN_ADMIN");
    navigate("/auth", { replace: true });
  } else if (localStorage.getItem("LOGIN_USER")) {
    localStorage.removeItem("LOGIN_USER");
    navigate("/", { replace: true });
  }
  return {
    type: AUTH_CLEAR,
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFail = (error) => {
  return {
    type: AUTH_FAIL,
    payload: error,
  };
};

export { actAuth, actLogout };
