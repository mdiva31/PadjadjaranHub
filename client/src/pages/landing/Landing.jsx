import "./landing.css";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <div className="nav">
        <div className="navLeft">
          <img src="/assets/logo.png" alt="" className="logoLanding" />
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
          Padjadjaran Hub merupakan social media yang dihususkan bagi mahasiswa universitas Padjadjaran yang bertujuan untuk
           mempermudah mahasiswa universitas Padjadjaran dalam berkomonikasi dan menshare moment seputar universitas
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
