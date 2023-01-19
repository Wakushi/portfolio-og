import React from "react";
import photoA from "../assets/diapo-a.png"
import photoB from "../assets/diapo-b.png"


export default function Presentation(){


    return(
        <div className="presentation">

            <div className="presentation-text">
                <h1>Hi ! I’m Maxime. <span>A Web Developer.</span></h1>
                <p>I’m a student in web development spending every day learning and experimenting. I have a creative mind and I'm always passionate for the projects I'm involved in.</p>
                <h4 className="learning">I'm currently learning : <span>React</span></h4>
            </div>
            
            <div className="presentation-animation">
                <div className="animation">
                   <img className="photo-a" src={photoA} width="100%"></img>
                   <img className="photo-b" src={photoB} width="200%"></img>
                </div>
            </div>

        </div>
    )
}