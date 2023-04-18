import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Project from "./components/Project";
import Wip from "./components/Wip";
import WipMain from "./components/WipMain";
import About from "./components/About";
import ChatModal from "./components/ChatModal";
import Footer from "./components/Footer";

// DATA

import projectData from "./projectData";
import wipData from "./wipData";
import chat from "./assets/images/chat.png";

export default function App() {
  const [quote, setQuote] = React.useState([]);
  const [displayChat, setDisplayChat] = React.useState(false);

  function toggleChatModal() {
    if (displayChat) {
      document.getElementById("chat-modal").classList.add("slide-out-right");
      setTimeout(() => {
        setDisplayChat(
          (prevDisplayChat) => (prevDisplayChat = !prevDisplayChat)
        );
      }, 400);
    } else {
      setDisplayChat((prevDisplayChat) => (prevDisplayChat = !prevDisplayChat));
    }
  }

  const projectsElement = projectData.map((project) => {
    return (
      <Project
        key={project.title}
        img={project.img}
        desc={project.desc}
        type={project.type}
        title={project.title}
        gitlink={project.gitlink}
        link={project.link}
      />
    );
  });

  const wipElement = wipData.map((wip) => {
    return (
      <Wip
        key={wip.title}
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
      if (softSkills[selectedImg]) {
        softSkills[selectedImg].style.transform = "scale(1.3)";
        setTimeout(() => {
          softSkills[selectedImg].style.transform = "scale(1)";
        }, 2000);
      }
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const hardSkills = document.querySelectorAll(
        ".about__skills__hard-skills ul li svg"
      );
      const lastIndex = hardSkills.length - 1;
      const selectedImg = Math.floor(Math.random() * (lastIndex + 1));
      if (hardSkills[selectedImg]) {
        hardSkills[selectedImg].style.transform = "scale(1.3)";
        setTimeout(() => {
          hardSkills[selectedImg].style.transform = "scale(1)";
        }, 2000);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app-container flex--simple">
      <Header toggleChatModal={toggleChatModal} />
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
      <div onClick={toggleChatModal} className="chat-icon">
        <img src={chat} alt="chatbox icon"></img>
      </div>
      {displayChat && <ChatModal toggleChatModal={toggleChatModal} />}
      <Footer quote={quote.content} />
    </div>
  );
}
