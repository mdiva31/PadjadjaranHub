import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <span className="loginDesc1">Lets</span>
          <span className="loginDesc2">Connect.</span>
        </div>
        <div className="loginRight">
        <h3 className="loginLogo">PadjadjaranHub</h3>
        <h2 className="loginDesc3">Register</h2>
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <div className="desc1">
              sudah punya akun?
            <button className="loginRegisterButton">
              Log in
            </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
