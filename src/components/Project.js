import React from "react";

export default function Project(props) {
  return (
    <div className="project-card flex--column">
      <div className="project-card__image-container">
        <img src={props.img}></img>
      </div>

      <div className="project-card__text">
        <h3 className="">{props.type}</h3>
        <h2>{props.title}</h2>
      </div>

      <div className="flex--simple">
        <div className="project-card__icons flex--column">
          {props.gitlink !== "none" && (
            <a className="" target="_blank" href={props.gitlink}>
              <ion-icon name="logo-github"></ion-icon>
            </a>
          )}
          {props.link !== "none" && (
            <a className="" target="_blank" href={props.link}>
              <ion-icon name="globe-outline"></ion-icon>
            </a>
          )}
        </div>

        <p className="project-card__desc">{props.desc}</p>
      </div>
    </div>
  );
}
