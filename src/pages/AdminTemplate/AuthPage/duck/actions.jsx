import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CLEAR,
} from "./constants";
import api from "utils/apiUtil";

const DEFAULT_ADMIN = {
  id: "admin",
  password: "admin123"
};

const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    // 1. Check default admin account
    if (
      user.id === DEFAULT_ADMIN.id &&
      user.password === DEFAULT_ADMIN.password
    ) {
      // Tạo user giả lập với quyền ADMIN
      const fakeAdmin = {
        user: {
          id: DEFAULT_ADMIN.id,
          role: "ADMIN",
          name: "Super Admin"
        },
        token: "fake-admin-token"
      };
      localStorage.setItem("LOGIN_ADMIN", JSON.stringify(fakeAdmin));
      navigate("/admin/User", { replace: true });
      dispatch(actAuthSuccess(fakeAdmin));
      return; // Dừng luôn, không gọi API nữa
    }

    // 2. Nếu không phải admin mặc định, gọi API như bình thường
    api
      .post("auth/signin", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const previousRoute = localStorage.getItem("previousRoute");
          const user = result.data.content;
          let localStorageKey = "LOGIN_USER";
          let redirectRoute = "/";
          if (user.user.role === "ADMIN") {
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
        }
      })
      .catch((error) => {
        dispatch(actAuthFail(error.response?.data?.content || "Đăng nhập thất bại!"));
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
