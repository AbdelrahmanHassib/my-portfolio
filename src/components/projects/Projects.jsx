import React from "react";
import "./projects.css";
import Project from "./Project";

export default function Projects() {
  const projectInfo = [
    { title: "project 1" },
    { title: "project 2" },
    { title: "project 3" },
    { title: "project 4" },
  ];
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div>
        {projectInfo.map((info, i) => {
          return <Project key={i} title={info.title} />;
        })}
      </div>
    </section>
  );
}
