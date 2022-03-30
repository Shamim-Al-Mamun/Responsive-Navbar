import React, { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleToggle = () => {
    const navToggler = document.querySelector(".nav-toggler");
    navToggler.classList.toggle("active");
    setShowLinks(!showLinks);
  };
  //Navbar changes while scrolling
  window.addEventListener("scroll", function () {
    let header = document.getElementsByTagName("header")[0];
    let createAccount = this.document.querySelector(".createAccount");
    let windowPosition = window.scrollY > 90;
    header.classList.toggle("scrolling-active", windowPosition);
    createAccount.classList.toggle("createAccount-active", windowPosition);
    console.log(header);
  });
  return (
    <>
      <header>
        <nav>
          <div className="nav-header">
            <div className="logo">LOGO</div>
            <div className="toggle">
              <button
                type="button"
                className="nav-toggler"
                onClick={handleToggle}
              >
                <span></span>
              </button>
            </div>
          </div>
          <div className={showLinks ? "nav-links show-links" : "nav-links"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <button type="button" className="createAccount">
                  create account
                </button>
              </li>
              <li>
                <button type="button" className="login">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
