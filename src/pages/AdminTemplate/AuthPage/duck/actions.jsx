// src/redux/actions/actAuth.js
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
    dispatch({ type: AUTH_REQUEST });

    // Kiểm tra admin mặc định (lưu ý dùng id hoặc username, tùy form)
    if (
      (user.id === DEFAULT_ADMIN.id || user.username === DEFAULT_ADMIN.id) &&
      user.password === DEFAULT_ADMIN.password
    ) {
      const fakeAdmin = {
        user: {
          id: DEFAULT_ADMIN.id,
          role: "ADMIN",
          name: "Super Admin"
        },
        token: "fake-admin-token"
      };
      localStorage.setItem("LOGIN_ADMIN", JSON.stringify(fakeAdmin));
      dispatch({ type: AUTH_SUCCESS, payload: fakeAdmin });
      navigate("/admin/User", { replace: true });
      return;
    }

    // Nếu không phải admin mặc định, gọi API như bình thường
    api
      .post("auth/signin", user)
      .then((result) => {
        if (result.data.statusCode === 200) {
          const previousRoute = localStorage.getItem("previousRoute");
          const userData = result.data.content;
          let localStorageKey = "LOGIN_USER";
          let redirectRoute = "/";
          if (userData.user.role === "ADMIN") {
            localStorageKey = "LOGIN_ADMIN";
            redirectRoute = "/admin/User";
          }
          localStorage.setItem(localStorageKey, JSON.stringify(userData));
          dispatch({ type: AUTH_SUCCESS, payload: userData });
          if (previousRoute) {
            localStorage.removeItem("previousRoute");
            navigate(previousRoute, { replace: true });
          } else {
            navigate(redirectRoute, { replace: true });
          }
        }
      })
      .catch((error) => {
        dispatch({
          type: AUTH_FAIL,
          payload: error.response?.data?.content || "Đăng nhập thất bại!"
        });
      });
  };
};

export { actAuth };
