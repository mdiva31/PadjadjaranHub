import {LoginSuccess} from "./context/AuthAction";
import { axiosInstance } from "./config";

// ketika melakukan request untuk login
export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axiosInstance.post("auth/login", userCredential);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const logoutCall = async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};