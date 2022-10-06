import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserNav() {
  let Navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("userNameToken");
    Navigate("/");
    window.location.reload();
  }

  return (
    <>
      <li>
        <ul className="left_nav">
          <li className="left_nav_li">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
          </li>
          <li className="left_nav_li">
            <NavLink className="nav_link" to="/about">
              About
            </NavLink>
          </li>
          <li className="left_nav_li">
            <NavLink className="nav_link" to="/name">
              Name
            </NavLink>
          </li>
          <li className="left_nav_li">
            <button onClick={handleLogout} className="logout_btn primary-black-background primary-white">
              Logout
            </button>
          </li>
        </ul>
      </li>
    </>
  );
}

export default UserNav;
