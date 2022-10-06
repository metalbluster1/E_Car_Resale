import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function UserHome() {
  return (
    <nav id="user_nav" className="main_nav">
      <ul className="sub_nav">
        <li>
          <h1 className="main_title">E Car Sale</h1>
        </li>
        <li>
          <ul className="left_nav">
            <li className="left_nav_li">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="left_nav_li">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="left_nav_li">
              <NavLink to="/name">Name</NavLink>
            </li>
            <li className="left_nav_li">...</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default UserHome;
