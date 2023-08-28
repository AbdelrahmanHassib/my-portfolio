import React from "react";
import "./Technologies.css";

export default function Technologies() {
  const techs = [
    { name: "Html", level: "advanced" },
    { name: "CSS, Sass & Bootstrap", level: "regular" },
    { name: "Javascript", level: "regular" },
    { name: "UI design in Figma", level: "regular" },
    { name: "React", level: "regular" },
    { name: "Typescript", level: "beginner" },
  ];
  return (
    <div className="tech-div">
      <h1>Technologies</h1>
      <div>
        {techs.map((tech) => {
          return (
            <div>
              <div className="tech-level-div flex">
                <h2>{tech.name}</h2>
                <h3>{tech.level}</h3>
              </div>
              <img src={`src/assets/images/indicator-${tech.level}.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
