import React from "react";
import Card from "./card";
import AllMatches from "./AllMatches";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <>
        <header className="header">
          {/* Topbar start changed*/}
          <section className="topbar">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <a
                    href="https://demo.themeies.com/cricnotch/homepage.html"
                    className="logo"
                  >
                    <img
                      src="https://demo.themeies.com/cricnotch/assets/images/logo.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="topbar-right">
                    <div className="custom-dropdown lang-dropdown">
                      <div className="selection">
                        <img src="https://demo.themeies.com/cricnotch/assets/images/flags/india.png" />
                        India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="main-header">
            <div className="container">
              <nav className="navbar">
                <div className="nav-menuu">
                  {/* <button className="mobile-nav-toggler">☰</button> */}

                  <div className="new">
                    <Link to="/">
                      <h3>Current Matches</h3>
                    </Link>
                  </div>
                  <div className="new">
                    <Link to="/all">
                      <h3>Upcomming Matches</h3>
                    </Link>
                  </div>
                </div>
                <div className="header-search">
                  <form action="https://demo.themeies.com/cricnotch/homepage.html">
                    <input type="text" placeholder="Search here" required />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </section>
          {/* Main header end */}
        </header>
        {/* Header strat */}
      </>
      <Routes>
        <Route path="/" index element={<Card />} />
        <Route path="/all" element={<AllMatches />} />
      </Routes>
    </Router>
  );
}
