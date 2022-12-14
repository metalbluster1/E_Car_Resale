import React, { useEffect, useState } from "react";
import Page from "./page";

function SignupPage() {
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  function handleSignup(e) {
    e.preventDefault();
    alert("Account created");
  }

  return (
    <>
      <Page title="Sign Up" id="signup_page">
        <div className="signup_page">
          <form onSubmit={handleSignup} className="signup_form">
            <ul className="signup_form_ul">
              <li className="signup_li signup_label_title">
                <label htmlFor="signuptitle" className="signup_label">
                  SIGN UP
                </label>
              </li>

              <li className="singup_li">
                <label htmlFor="username" className="signup_label signup_label_username">
                  User Name
                </label>
              </li>
              <li className="signup_li">
                <input onChange={(e) => setUserName(e.target.value)} type="email" className="signup_input signup_email_input" placeholder="Enter user name" required />
              </li>

              <li className="singup_li">
                <label htmlFor="username" className="signup_label signup_label_name">
                  Name
                </label>
              </li>
              <li className="signup_li">
                <input onChange={(e) => setName(e.target.value)} type="text" className="signup_input signup_name_input" placeholder="Enter Name" required />
              </li>

              <li className="singup_li">
                <label htmlFor="username" className="signup_label signup_label_password">
                  Password
                </label>
              </li>
              <li className="signup_li">
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="signup_input signup_password_input" placeholder="Password" required />
              </li>

              <li className="singup_li">
                <label htmlFor="username" className="signup_label signup_label_password">
                  Re Password
                </label>
              </li>
              <li className="signup_li">
                <input type="password" className="signup_input signup_password_input" placeholder="Password" required />
              </li>

              <li className="signup_li login_btn">
                <button className="btn primary-green-background primary-white">Sign Up</button>
              </li>
              <li>
                <input type="checkbox" className="signup_checkbox" />
                <label htmlFor="agree" className="signup_label">
                  I agreed to the <span className="primary-blue">Terms of use</span> and <span className="primary-blue">Privacy Policy</span>
                </label>
              </li>
            </ul>
          </form>
        </div>
      </Page>
    </>
  );
}

export default SignupPage;
