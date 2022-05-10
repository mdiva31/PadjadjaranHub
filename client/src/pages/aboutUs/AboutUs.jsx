import "./aboutus.css"
import { Link } from "react-router-dom";
export default function aboutUs() {
  return (
   <> 
   <Link to="/">
    <img src="/assets/logo.png" alt="" className="logoLanding" />
    </Link>
  
    <br></br><br></br>
          <div className="titleAboutus">OUR Team</div><br/> <br/> <br/>
<div className="grid-container">
  <div className="titleOrang">Project Manager</div>
  <div className="titleOrang">UI/UX Designer</div>
  <div className="titleOrang">FrontEnd</div>
  <div className="titleOrang">BackEnd</div>
  <div><img src="/assets/22.jpg" alt="" className="imgAboutus"/> </div>
  <div><img src="/assets/74.jpg" alt="" className="imgAboutus"/></div>
  <div><img src="/assets/30.jpg" alt="" className="imgAboutus"/></div>  
  <div><img src="/assets/38.jpg" alt="" className="imgAboutus"/></div>
  <div>M Diva Eka Andriana <br />140810190022</div>
  <div>Fahrul Thariq Fadillah <br />140810190074</div>  
  <div>Azhar Jauharul Umam <br />140810190030</div>
  <div>Leonardo Septian Dwigantoro <br />140810190038</div>
</div>

  
        <div className="footerAboutus"></div>
    </>
  );
}
