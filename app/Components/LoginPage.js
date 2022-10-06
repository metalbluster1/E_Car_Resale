import React, { useEffect } from "react";

function LoginPage() {
  return (
    <section id="login_page" className="login_page">
      <form action="" className="login_form">
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
            <input type="email" className="login_input login_username_input" placeholder="Enter user name" required />
          </li>
          <li className="login_li">
            <label htmlFor="password" className="login_label login_label_password">
              Password
            </label>
          </li>
          <li className="login_li">
            <input type="password" className="login_input login_password_input" placeholder="Password" />
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
                <a href="#" className="forget_password">
                  Forget Password?
                </a>
              </li>
              <li>
                <a href="#" className="create_account">
                  Create account
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </form>
    </section>
  );
}

export default LoginPage;
