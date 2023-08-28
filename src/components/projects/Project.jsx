import React from "react";
import "./project.css";
import projectImg from "../../assets/images/project-img.svg";

export default function project({ title }) {
  return (
    <section className="project">
      <img src={projectImg} />
      <h4>{title}</h4>
      <div></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="button-portfolio">Look it up</button>
    </section>
  );
}
