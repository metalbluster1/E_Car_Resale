import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuestNav from "./GuestNav";
import UserNav from "./UserNav";
import LoginPage from "./LoginPage";

function HomeNav(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userNameToken")) {
      const saved = localStorage.getItem("userNameToken");
      const name = JSON.parse(saved);
      if (name != "") {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  }, []);

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
        {isLogin ? <UserNav /> : <GuestNav />}
      </ul>
    </nav>
  );
}

export default HomeNav;
