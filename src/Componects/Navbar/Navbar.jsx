import React from "react";
import "./Navbar.css";
import Menu_icon from "../../assets/menu.png";
import Logo from "../../assets/youtube.png";
import Search from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import notification from "../../assets/notification.png";
import more_icon from "../../assets/more.png";
import profile_icon from "../../assets/ajay.jpg";
import { Link } from "react-router-dom";
const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={Menu_icon}
          alt=""
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="menu-icon"
        />
        <Link to="/">
          <img src={Logo} alt="" className="logo-icon" />
        </Link>
      </div>

      <div className="nev-middle flex div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={Search} alt="" />
        </div>
      </div>

      <div className="nev-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
