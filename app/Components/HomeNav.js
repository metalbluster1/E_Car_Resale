import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestNav from "./GuestNav";
import UserNav from "./UserNav";

function HomeNav() {
  return (
    <nav className="main_nav" id="guest_nav">
      <ul className="sub_nav">
        <li>
          <h1 className="main_title">
            <NavLink className="main_title" to="/">
              E Car Sale
            </NavLink>
          </h1>
        </li>
        <GuestNav />
      </ul>
    </nav>
  );
}

export default HomeNav;
