import React, { useEffect } from "react";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer_container">
          <ul className="footer_nav">
            <li className="footer_nav_li">
              <a href="www.facebook.com" className="facebook_a">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="footer_nav_li">
              <a href="www.instagram" className="instagram_a">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="footer_nav_li">
              <a href="www.youtube" className="youtube_a"></a>
              <i className="fa-brands fa-youtube fa-2x"></i>
            </li>
            <li className="footer_nav_li">
              <a href="www.twitter" className="twitter_a"></a>
              <i className="fa-brands fa-twitter fa-2x"></i>
            </li>
          </ul>
          <p className="footer_label">All Rights Reserved 2022 &copy;</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
