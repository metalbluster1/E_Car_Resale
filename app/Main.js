import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  Components
import Footer from "./Components/Footer";
import GuestHome from "./Components/GuestHome";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import UserHome from "./Components/UserHome";

function ExampleComponent() {
  return (
    <BrowserRouter>
      <GuestHome />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ExampleComponent />);

if (module.hot) {
  module.hot.accept();
}
