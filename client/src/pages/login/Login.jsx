import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  // variabel yang dipakai utk useRef
  const email = useRef();
  const password = useRef();

  // fethcing data dari AuthContext
  const {isFetching, dispatch } = useContext(AuthContext);

  // handleClik untuk login
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc1">Mari</span>
          <span className="loginDesc2">Terkoneksi.</span>
        </div>
        <div className="loginRight">
          <h3 className="loginLogo1">PadjadjaranHub</h3>
          {/* <h2 className="loginDesc3">Login</h2> */}
          <form className="loginBox1" onSubmit={handleClick}>
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
              <br></br>
              <Link to={`/register`}>
                <button className="loginRegisterButton">
                  {isFetching ? (
                    <CircularProgress color="inherit" size="20px" />
                  ) : (
                    "Buat Akun Baru"
                  )}
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
