import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  // variabel yang dipakai utk useRef
  const email = useRef();
  const password = useRef();

  // fethcing data dari AuthContext
  const { user, isFetching, dispatch } = useContext(AuthContext);

  // handleClik untuk login
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc1"> Lets </span>
          <span className="loginDesc2"> Connect. </span>
        </div>
        <div className="loginRight">
        <img src="./assets/logo.png" className="loginLogo"/>
          <h2 className="loginDesc3">Login</h2>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              required
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Masuk"
              )}
            </button>
            <div className="desc1">
              Belum Punya Akun? 
              <button className="toRegisterButton">{isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Buat Akun Baru"
              )}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
