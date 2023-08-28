import React from "react";
import "./Footer.css";
import linkedinIcon from "../icons/linkedin-large.png";
import githubIcon from "../icons/github-large.png";

export default function Footer() {
  return (
    <section className="flex footer-section">
      <h1>
        Call me: <br /> 010-9821-0952
      </h1>
      <h1>
        Email: <br /> abdelrahmanhassib@gmail.com
      </h1>
      <div>
        <a href="https://github.com/AbdelrahmanHassib" target="_blank">
          <img
            className="clickable github-icon"
            width="72px"
            src={githubIcon}
            alt="Github logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelrahman-hassib-261019174/"
          target="_blank"
        >
          <img
            className="clickable"
            width="72px"
            src={linkedinIcon}
            alt="LinkedIn logo"
          />
        </a>
      </div>
    </section>
  );
}
