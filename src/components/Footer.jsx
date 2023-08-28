import React from "react";
import "./Footer.css";

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
        <img
          className="clickable github-icon"
          width="72px"
          src="src/icons/github-large.png"
          alt="Github logo"
        />
        <img
          className="clickable"
          width="72px"
          src="src/icons/linkedin-large.png"
          alt="LinkedIn logo"
        />
      </div>
    </section>
  );
}
