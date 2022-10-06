import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Page from "./page";

function LoginPage() {
  let Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("userNameToken", JSON.stringify(userName));
  }, [userName]);

  function handleLogin(e) {
    e.preventDefault();
    Navigate("/");
    window.location.reload();
  }

  return (
    <Page title="Login Page" id="login_page" className="login_page">
      <form onSubmit={handleLogin} className="login_form">
        <ul className="login_form_ul">
          <li className="login_li login_label_title">
            <label htmlFor="" className="login_label">
              LOGIN
            </label>
          </li>
          <li className="login_li">
            <label htmlFor="username" className="login_label login_label_username">
              User Name
            </label>
          </li>
          <li className="login_li">
            <input onChange={(e) => setUserName(e.target.value)} type="email" className="login_input login_username_input" placeholder="Enter user name" required />
          </li>
          <li className="login_li">
            <label htmlFor="password" className="login_label login_label_password">
              Password
            </label>
          </li>
          <li className="login_li">
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="login_input login_password_input" placeholder="Password" />
          </li>
          <li className="login_li">
            <input type="checkbox" className="login_input login_checkbox_input" />
            <span className="remember_me">Remember Me</span>
          </li>
          <li className="login_li login_btn">
            <button className="btn primary-green-background primary-white">Login</button>
          </li>
          <li>
            <ul className="login_li login_forget_create">
              <li>
                <a href="#" className="forget_password secondary-blue">
                  Forget Password?
                </a>
              </li>
              <li>
                <NavLink to="/signup" className="create_account secondary-blue">
                  Create account
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </form>
    </Page>
  );
}

export default LoginPage;
