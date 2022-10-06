import React, { useEffect } from "react";
import Page from "./page";

function HomePage() {
  return (
    <>
      <Page title="Home">
        <div className="home_page_div">
          <section className="home_page">
            <h1 className="heading">E-Car Sale</h1>
            <p>About</p>
            <p>Contact us</p>
          </section>
        </div>
      </Page>
    </>
  );
}

export default HomePage;
