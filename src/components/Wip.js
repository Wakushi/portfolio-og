import React from "react";

export default function Wip(props) {
    return(
        <div className="project wip-project">

            <img src={props.img} width="45%"></img>

            <p className="project-desc">{props.desc}</p>

            <div className="project-info">
                <h3 className="project-type">{props.type}</h3>
                <h2 className="project-title">{props.title}</h2>
                {props.gitlink !== "none" && <a className="project-git" target="_blank" href={props.gitlink}><ion-icon name="logo-github"></ion-icon></a>}
                {props.link !== "none" && <a className="project-link" target="_blank" href={props.link}><ion-icon name="globe-outline"></ion-icon></a>}
            </div>
            
        </div>
    )
}