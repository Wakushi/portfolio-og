import React from "react";
import heroImage from "../assets/images/hero-image.png"

export default function Presentation(){


    return(
        <div className="hero">

            <div className="hero__text flex--center flex--column">
                <div>
                    <h1 className="text--rainbow slide-in-bottom text--bogart">Hi ! I’m Maxime.</h1>
                    <h1 className="text--rainbow slide-in-bottom text--bogart">A Web Developer.</h1>
                </div>
                <p className="slide-in-top">I’m a student in web development spending every day learning and experimenting. I have a creative mind and I'm always passionate for the projects I'm involved in.</p>
                <h2 className="learning slide-in-top">I'm currently learning : <span className="text--rainbow">RxJS / Solidity</span></h2>
            </div>
            
            <div className="hero__image-container float">
                    <img src={heroImage} alt="hero image"></img>
            </div>

        </div>
    )
}