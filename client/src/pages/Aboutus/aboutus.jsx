import "./aboutus.css";
import { Link } from "react-router-dom";
export default function Aboutus() {
  return (
    <>
      <Link to="/">
        <div>
          <img src="/assets/logo.png" alt="" className="logoLanding2" />
        </div>
      </Link>
      <div className="titleAboutus">OUR Team</div>
      <div className="grid-container">
        <div className="titleOrang">Project Manager</div>
        <div className="titleOrang">UI/UX Designer</div>
        <div className="titleOrang">FrontEnd</div>
        <div className="titleOrang">BackEnd</div>
        <div>
          <img src="/assets/person/22.jpg" alt="" className="imgAboutus" />{" "}
        </div>
        <div>
          <img src="/assets/person/74.jpg" alt="" className="imgAboutus" />
        </div>
        <div>
          <img src="/assets/person/30.jpg" alt="" className="imgAboutus" />
        </div>
        <div>
          <img src="/assets/person/38.jpg" alt="" className="imgAboutus" />
        </div>
        <div>
          M Diva Eka Andriana <br />
          140810190022
        </div>
        <div>
          Fahrul Thariq Fadillah <br />
          140810190074
        </div>
        <div>
          Azhar Jauharul Umam <br />
          140810190030
        </div>
        <div>
          Leonardo Septian Dwigantoro <br />
          140810190038
        </div>
      </div>
      <div className="footerAboutus">
        <p className="footerDesc">
          Trio Sekawan + Thariq <br></br>Proyek Perangkat Lunak I 2022
        </p>
        <br />
      </div>
    </>
  );
}
