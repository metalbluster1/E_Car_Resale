import React, { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function GuestNav() {
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
    </>
  );
}

export default GuestNav;
