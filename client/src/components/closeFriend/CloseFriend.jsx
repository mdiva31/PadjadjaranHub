import "./closeFriend.css";

export default function CloseFriend({user}) {
  const PF = "https://padjadjaran-hub.herokuapp.com/images/";
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
