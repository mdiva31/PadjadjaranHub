import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function Register() {
  // variabel yang dipakai untuk Hook
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordLagi = useRef();
  const history = useHistory();

  // handleClik untuk register
  const handleClick = async (e) => {
    e.preventDefault();

    // cek apakah password sama
    if (passwordLagi.current.value !== password.current.value) {
      passwordLagi.current.setCustomValidity("Password tidak sama");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        //jika data berhasil masuk, masuk ke menu login
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc1">Mari </span>
          <span className="loginDesc2"> Terkoneksi.</span>
        </div>
        <div className="loginRight">
          <h3 className="loginLogo">PadjadjaranHub</h3>
          {/* <h2 className="loginDesc3">Daftar</h2> */}
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Masukan Password Lagi"
              required
              ref={passwordLagi}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Daftar
            </button>
            <div className="desc1">
              Sudah punya akun?
              <br></br>
              <Link to={`/login`}>
                <button className="loginRegisterButton">Masuk</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
