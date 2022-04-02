import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">  
          <span className="loginDesc1"> Lets </span>
          <span className="loginDesc2"> Connect. </span>
        </div>
        <div className="loginRight">
        <h3 className="loginLogo">PadjadjaranHub</h3>
        <h2 className="loginDesc3">Login</h2>
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <div className="desc1">
              Belum punya akun?
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
