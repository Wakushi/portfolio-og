import React from "react"
import notes from "../assets/notes-app.png"

export default function Project(props) {
    return(
        <div className="project">

            <img src={props.img} width="35%"></img>

            <p className="project-desc">{props.desc}</p>

            <div className="project-info">
                <h3 className="project-type">{props.type}</h3>
                <h2 className="project-title">{props.title}</h2>
            </div>
            
        </div>
    )
}