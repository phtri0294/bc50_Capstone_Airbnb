import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CLEAR,
} from "./constants";
import api from "utils/apiUtil";

const DEFAULT_ADMIN = {
  email: "admin123",
  password: "admin123"
};

export const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });

    // Debug xem user truyền lên từ form gồm gì
    console.log("user login payload:", user);

    // So sánh email và password nhập vào với admin mặc định
    if (
      user.email === DEFAULT_ADMIN.email &&
      user.password === DEFAULT_ADMIN.password
    ) {
      console.log("==> ĐĂNG NHẬP ADMIN MẶC ĐỊNH");
      const fakeAdmin = {
        user: {
          email: DEFAULT_ADMIN.email,
          role: "ADMIN",
          name: "Super Admin"
        },
        token: "fake-admin-token"
      };
      localStorage.setItem("LOGIN_ADMIN", JSON.stringify(fakeAdmin));
      dispatch({ type: AUTH_SUCCESS, payload: fakeAdmin });
      navigate("/admin", { replace: true }); // Đúng route admin bạn cần
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
            redirectRoute = "/admin";
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

export const actLogout = (navigate) => {
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

export { actAuth };
