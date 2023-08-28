import React from "react";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <section className="nav-div">
      <div className="flex first-nav-div">
        <div className="flex">
          <img className="logo-icon" src="src/icons/logo.png" alt="logo icon" />
          <h2>Portfolio</h2>
        </div>
        <div className="flex links-div">
          <a>Projects</a>
          <a className="links-a">Technologies</a>
          <a>About me</a>
        </div>
      </div>
      <div className="flex">
        <img
          className="clickable github-logo-nav"
          src="src/icons/github.png"
          width="32px"
          alt="Github logo"
        />
        <img
          className="clickable"
          src="src/icons/linkedin.png"
          width="32px"
          alt="LinkedIn logo"
        />
      </div>
    </section>
  );
}
