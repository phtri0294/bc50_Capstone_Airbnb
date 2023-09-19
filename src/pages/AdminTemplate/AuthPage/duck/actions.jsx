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
          if (user.maLoaiNguoiDung === "ADMIN") {
            if (previousRoute) {
              dispatch(actAuthSuccess(user));
              localStorage.setItem("UserADMIN", JSON.stringify(user));
              localStorage.removeItem("previousRoute");
              navigate(previousRoute, { replace: true });
            } else {
              dispatch(actAuthSuccess(user));
              localStorage.setItem("UserADMIN", JSON.stringify(user));
              navigate("/admin", { replace: true });
            }
          } else {
            if (previousRoute) {
              dispatch(actAuthSuccess(user));
              localStorage.setItem("UserUSER", JSON.stringify(user));
              localStorage.removeItem("previousRoute");
              navigate(previousRoute, { replace: true });
            } else {
              dispatch(actAuthSuccess(user));
              localStorage.setItem("UserUSER", JSON.stringify(user));
              navigate("/", { replace: true });
            }
          }
        }
      })
      .catch((error) => {
        dispatch(actAuthFail(error.response.data.content));
      });
  };
};

const actLogout = (navigate) => {
  if (localStorage.getItem("UserADMIN")) {
    localStorage.removeItem("UserADMIN");
    navigate("/auth", { replace: true });
  } else if (localStorage.getItem("UserUSER")) {
    localStorage.removeItem("UserUSER");
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
