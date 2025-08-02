import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_CLEAR,
} from "./constants";
import api from "utils/apiUtil";

// Tài khoản admin mặc định
const DEFAULT_ADMIN = {
  email: "admin123",    // Thay đổi theo ý bạn
  password: "admin123"
};

// Bật bypass mọi trường hợp lỗi (DEV mode), set biến môi trường nếu muốn
const BYPASS_LOGIN_ON_ERROR = true; // Set false nếu muốn tắt bypass khi API lỗi

export const actAuth = (user, navigate) => {
  return (dispatch) => {
    dispatch({ type: AUTH_REQUEST });

    // Debug: log dữ liệu từ form
    console.log("user login payload:", user);

    // Lấy giá trị nhập vào (có thể là email/username/account tuỳ form)
    const loginId = user.email || user.username || user.account;

    // 1. Đăng nhập admin mặc định (không gọi API)
    if (
      loginId === DEFAULT_ADMIN.email &&
      user.password === DEFAULT_ADMIN.password
    ) {
      console.log("==> ĐĂNG NHẬP ADMIN MẶC ĐỊNH (BYPASS API)");
      const fakeAdmin = {
        user: {
          email: loginId,
          role: "ADMIN",
          name: "Super Admin"
        },
        token: "fake-admin-token"
      };
      localStorage.setItem("LOGIN_ADMIN", JSON.stringify(fakeAdmin));
      dispatch({ type: AUTH_SUCCESS, payload: fakeAdmin });
      navigate("/admin", { replace: true });
      return;
    }

    // 2. Đăng nhập thường: Gọi API
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
        } else {
          // Không đúng statusCode vẫn báo lỗi
          dispatch({
            type: AUTH_FAIL,
            payload: result.data?.content || "Đăng nhập thất bại!"
          });
        }
      })
      .catch((error) => {
        // 3. BYPASS khi API bị lỗi (ví dụ server die, token lỗi, network lỗi)
        if (BYPASS_LOGIN_ON_ERROR) {
          console.warn("API LOGIN ERROR, BYPASS to FAKE ADMIN:", error);
          const fakeUser = {
            user: {
              email: loginId,
              role: "ADMIN",
              name: "Fake Admin (API lỗi)"
            },
            token: "fake-admin-token"
          };
          localStorage.setItem("LOGIN_ADMIN", JSON.stringify(fakeUser));
          dispatch({ type: AUTH_SUCCESS, payload: fakeUser });
          navigate("/admin", { replace: true });
        } else {
          dispatch({
            type: AUTH_FAIL,
            payload: error.response?.data?.content || "Đăng nhập thất bại!"
          });
        }
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
