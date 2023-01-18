import React from "react";
import makushiPiano from "../assets/makushi-piano.jpg"
import makushiPro from "../assets/makushi-pro.jpg"
import oc from "../assets/openclassrooms.png"

export default function About() {

    const styles = {
        borderRadius: "12px"
    };

    return(
        <div>
            <div className="about">

                <div className="about-pic">
                    <img className="about-photo-b" src={makushiPro} width="100%"></img>
                </div>

                <div className="about-me">
                    <h2>I'm Maxime, a french student in Web Development learning from Openclassrooms, Scrimba and pretty much the whole internet.</h2>
                    <p>A few month ago I decided to start learning HTML, CSS and JavaScript and I discovered a real passion in web development on my journey.</p>
                    <p>I have a really creative mind and I find happiness in creation, whether it's coding a web app or doing music production.</p>
                    <p>Currently I spend my time learning new features, new tools and new langagues to become a great web developer, and I love it !</p>
                </div>

            </div>
            
            <div className="studies">
                <h3>I'm currently looking for a company to start my study training program with Openclassrooms!</h3>
                <div className="studies-parts">
                    <div className="learn">
                        <h4>What I'll learn</h4>
                        <ul>
                            <li>Build a dynamic and responsive web site (HTML, CSS, JavaScript and React)</li>
                            <li>Create API and databases to develop complete and dynamic web sites while handling its operation server side (NodeJS, Express, MongoDB)</li>
                            <li>Optimize performances and handling existing web sites maintenance to allow optimal operation and a great visibility on search engines (SEO)</li>
                            <li>Managing a project from A to Z : from planification to the presentation of the solution to the client including technical specifications writing.</li>
                        </ul>
                    </div>
                    <div className="school-info">
                        <h4>Details</h4>
                        <ul>
                            <li>I'm eligible to the state's bonus ( 6000€ to the company )</li>
                            <li>I can start at any time of the year</li>
                            <li>The rythm can be adapted to suit the company restrictions</li>
                            <li>I'm preparing a diploma which is certified to the RNCP</li>
                            <li>Openclassrooms works with all OPCA and OPCO</li>
                        </ul>
                    </div>
                    <div className="hard-skills">
                        <h4>Hard Skills</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git / GitHub</li>
                        </ul>
                    </div>
                    <div className="soft-skills">
                        <h4>Soft Skills</h4>
                        <ul>
                            <li>Creative</li>
                            <li>Teamwork lover</li>
                            <li>Meticulous</li>
                            <li>Curious</li>
                            <li>Ambitious</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hobbies">
                <div className="hobbies-text">
                    <h3>My second passion : music</h3>
                    <p>I started learning the guitar a few years ago. In 2021 I decided to challenge myself to learn one new song every day and record myself in the process.</p>
                    <p>Therefore, I managed to learn 365+ songs during this year, and thanks to this amazing experience I have learned how much rigor and dedication are important in order to learn anything and become good at it.</p>
                    <p>In 2022 I started to produce my own music with Ableton, and it became obvious to bring together my two passions. Now I'm really happy to be able to create music identities for my web projects.
                    </p>
                </div>
                <div className="spotify">
                    <h4>I'm now on Spotify !</h4>
                    <iframe style={styles} src="https://open.spotify.com/embed/artist/3UpfeEs7V3bmv55WYtJnLf?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>



          

           



        </div>
    )
}