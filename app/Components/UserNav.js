import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function UserNav() {
  return (
    <>
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
    </>
  );
}

export default UserNav;
