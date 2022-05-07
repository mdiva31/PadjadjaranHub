import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {logoutCall} from "../../apiCalls";

export default function Topbar() {
  const PF = "https://padjadjaran-hub.herokuapp.com/images/";
  const { user, dispatch } = useContext(AuthContext);

  //fungsi logout
  const handleClick = () => {
    logoutCall(
      dispatch
    );
  window.location.reload()
  }


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/">
          <img src="/assets/logo2.png" alt="PadjadjaranHub" className="logoTopbar" />
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Beranda</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="foto-profil"
            className="topbarImg"
          />
        </Link>
        <span className="topbarLink" onClick={handleClick}>Keluar</span>
      </div>
    </div>
  );
}
