import "./sidebar.css";
import { Home, Person, Group } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../apiCalls";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  const { user, dispatch } = useContext(AuthContext);

  //fungsi logout
  const handleClick = () => {
    logoutCall(dispatch);
    window.location.reload();
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={`/`}>
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>
          </Link>
          <Link to={`/profile/${user.username}`}>
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <span className="sidebarListItemText">Profil</span>
            </li>
          </Link>
          <Link to={`/aboutus`}>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">About US</span>
            </li>
          </Link>
        </ul>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
