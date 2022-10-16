import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://fontmeme.com/permalink/221010/0b086686e580a875d76619caf3651e6c.png"
          alt=""
        />
        <ul className="nav-links">
          <li>Home</li>
          <li>Tournaments</li>
          <li>Guides</li>
          <li>New & Popular</li>
        </ul>
      </div>
      <div className="navbar-right">
        <SearchOutlinedIcon className="icon" />
        <NotificationsIcon className="icon" />
        <div className="user-profile">
          <div className="user-icon">
            <img
              src="https://i.pinimg.com/236x/d0/ff/d4/d0ffd4b2e14f8bcb28bf470d692e4242.jpg"
              alt=""
            />
            <ArrowDropDownIcon className="icon" />
          </div>
          <div className="dropdown-menu">
            <span>Settings</span>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
