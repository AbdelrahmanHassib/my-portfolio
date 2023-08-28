import React from "react";
import "../components/Navbar.css";
import logoIcon from "../icons/logo.png";
import linkedinLogo from "../icons/linkedin.png";
import githubLogo from "../icons/github.png";

export default function Navbar() {
  return (
    <section className="nav-div">
      <div className="flex first-nav-div">
        <div className="flex">
          <img className="logo-icon" src={logoIcon} alt="logo icon" />
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
          src={githubLogo}
          width="32px"
          alt="Github logo"
        />
        <img
          className="clickable"
          src={linkedinLogo}
          width="32px"
          alt="LinkedIn logo"
        />
      </div>
    </section>
  );
}
