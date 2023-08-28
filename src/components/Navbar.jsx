import React from "react";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <section className="nav-div">
      <div className="flex first-nav-div">
        <div className="flex">
          <img src="src/icons/logo.png" style={{ marginRight: "0.8125em" }} />
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
          className="clickable"
          src="src/icons/github.png"
          width="32px"
          style={{ marginRight: "2em" }}
        />
        <img className="clickable" src="src/icons/linkedin.png" width="32px" />
      </div>
    </section>
  );
}
