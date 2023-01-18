import React from "react";

export default function Footer(props) {
    return(
        <div className="footer">
            <h5>I'm currently looking for a company to <a href="https://openclassrooms.com/fr/paths/717-developpeur-web">start my study training program</a>.</h5>
            <a className="footer-email" href="mailto:maxime.eliazord@gmail.com">Feel free to contact me !</a>
            <h6>Quote of the day : <em>"{props.quote}"</em></h6>
        </div>
    )
}