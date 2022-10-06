import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function GuestHome() {
  return (
    <nav className="main_nav" id="guest_nav">
      <ul className="sub_nav">
        <li>
          <h1 className="main_title">E Car Sale</h1>
        </li>
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
              <NavLink className="nav_link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="left_nav_li">
              <NavLink className="nav_link" to="/signup">
                SignUp
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default GuestHome;
