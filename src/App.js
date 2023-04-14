import React from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Project from "./components/Project";
import projectData from "./projectData";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import WipMain from "./components/WipMain";
import Wip from "./components/Wip";
import wipData from "./wipData";

export default function App() {
  const [projects, setProjects] = React.useState(projectData);
  const [wipProjects, setWipProjects] = React.useState(wipData);
  const [quote, setQuote] = React.useState([]);

  const projectsElement = projects.map((project) => {
    return (
      <Project
        img={project.img}
        desc={project.desc}
        type={project.type}
        title={project.title}
        gitlink={project.gitlink}
        link={project.link}
      />
    );
  });

  const wipElement = wipProjects.map((wip) => {
    return (
      <Wip
        img={wip.img}
        desc={wip.desc}
        type={wip.type}
        title={wip.title}
        gitlink={wip.gitlink}
        link={wip.link}
      />
    );
  });

  React.useEffect(function () {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []);

  window.addEventListener("scroll", () => {
    const windowYScroll = window.scrollY;
    const allCards = document.querySelectorAll(".project-card");
    const allSkillsCards = document.querySelectorAll(".about__skills-card");
    for (let card of allCards) {
      if (card.offsetTop <= windowYScroll + 500) {
        card.classList.add("slide-in-top");
      }
    }
    for (let card of allSkillsCards) {
      if (card.offsetTop <= windowYScroll + 300) {
        card.classList.add("slide-in-bottom");
      }
    }
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const softSkills = document.querySelectorAll(
        ".about__skills__soft-skills ul li img"
      );
      const lastIndex = softSkills.length - 1;
      const selectedImg = Math.floor(Math.random() * (lastIndex + 1));
      softSkills[selectedImg].style.transform = "scale(1.3)";
      setTimeout(() => {
        softSkills[selectedImg].style.transform = "scale(1)";
      }, 2000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const hardSkills = document.querySelectorAll(".about__skills__hard-skills ul li svg");
      const lastIndex = hardSkills.length - 1;
      const selectedImg = Math.floor(Math.random() * (lastIndex + 1));
      hardSkills[selectedImg].style.transform = "scale(1.3)";
      setTimeout(() => {
        hardSkills[selectedImg].style.transform = "scale(1)";
      }, 2000);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app-container flex--simple">
      <Header />
      <div id="circle"></div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Presentation /> {projectsElement}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/wip"
          element={
            <>
              {" "}
              <WipMain /> {wipElement}{" "}
            </>
          }
        />
      </Routes>
      <Footer quote={quote.content} />
    </div>
  );
}
