import React from "react";
import "./Technologies.css";

export default function Technologies() {
  const techs = [
    { name: "Html", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Javascript", level: "Regular" },
    { name: "React", level: "Regular" },
    { name: "UI design in Figma", level: "Regular" },
    { name: "Typescript", level: "Beginner" },
  ];

  const additionalTechs = [
    "Git",
    "Teamwork",
    "Quick learning",
    "Engagement",
    "B2 english",
    "RWD ",
  ];
  return (
    <div className="tech-div">
      <h1>Technologies</h1>
      <div>
        {techs.map((tech, i) => {
          return (
            <div key={i} className="technologies-div">
              <div className="tech-level-div flex">
                <h2>{tech.name}</h2>
                <h3>{tech.level}</h3>
              </div>
              <div className="technologies-border-div border-divs">
                <div
                  className="linear-border-div border-divs"
                  style={{
                    width:
                      tech.level === "Expert"
                        ? "100%"
                        : tech.level === "Advanced"
                        ? "75%"
                        : tech.level === "Regular"
                        ? "50%"
                        : "25%",
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Additional technologies and skills</h2>
      <div>
        <ul>
          {additionalTechs.map((tech, i) => {
            return (
              <li key={i}>
                <h3>{tech}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
