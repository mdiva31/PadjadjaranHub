import "./landing.css";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <div className="nav">
        <div className="navLeft">
          <img src="/assets/logo.png" alt="" className="logo2" />
        </div>
        <div className="navRight">
          <Link to={`/register`}>
            <button className="join">Daftar</button>
          </Link>
          <div className="line"></div>
          <Link to={`/login`}>
            <button className="signIn">Masuk</button>
          </Link>
        </div>
        <br />
      </div>
      <div className="landing">
        <div className="landingLeft">
          <div className="landingTitle">
            Padjadjaran University Social Media
          </div>
          <br />
          <div className="landingDesc">
            Media sosial untuk anak unpad dengan tujuan mempermudah komunikasi dan berbagi informasi seputar kampus.
          </div>
          <Link to={`/register`}>
            <button className="gabung">Gabung Disini</button>
          </Link>
        </div>
        <div className="landingRight">
          <img src="/assets/vector_design.png" alt="" className="img" />
        </div>
      </div>
      <div className="footer">
        <p className="footerDesc">Trio Sekawan + Thariq <br></br>Proyek Perangkat Lunak I 2022</p>
      </div>
    </>
  );
}
