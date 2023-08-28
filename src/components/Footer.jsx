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
          className="clickable"
          width="72px"
          style={{ marginRight: "4.0625em" }}
          src="src/icons/github-large.png"
        />
        <img
          className="clickable"
          width="72px"
          src="src/icons/linkedin-large.png"
        />
      </div>
    </section>
  );
}
