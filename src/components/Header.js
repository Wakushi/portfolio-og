import React from "react";
import logo from "../assets/logo.png"

export default function Header() {
    return(
        <header>
            <div className="header-box">
                <nav className="nav-links">
                    <ul>
                        <li><a href="/">Projects</a></li>
                        <li><a href="#">Wip</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="mailto:maxime.eliazord@gmail.com">Contact</a></li>
                    </ul>
                </nav>

                <div className="logo">
                    <img src={logo} width="50px"></img>
                </div>

                <nav className="ext-links">
                    <ul>
                        <li><a target="_blank" href="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                        <li><a target="_blank" href="https://github.com/Wakushi"><ion-icon name="logo-github"></ion-icon></a></li>
                        <li><a target="_blank" href="https://open.spotify.com/artist/3UpfeEs7V3bmv55WYtJnLf?si=ZgHqX-tnR5aBvcZJ7Qmhew"><ion-icon name="musical-notes-outline"></ion-icon></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}