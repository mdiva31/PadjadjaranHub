import "./register.css";
import { useRef } from "react";
import axios from "axios";
import  {useHistory} from 'react-router-dom'


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
        //jika data berhasil masuk, masuk ke menu register
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <span className="registerDesc1">Lets</span>
          <span className="registerDesc2">Connect.</span>
        </div>
        <div className="registerRight">
        <img src="./assets/logo.png" className="registerLogo"/>
          <h2 className="registerDesc3">Register</h2>
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordLagi}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <div className="desc1">
              sudah punya akun?
              <button className="toLoginButton">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
