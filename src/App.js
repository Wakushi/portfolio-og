import React from "react"
import Header from "./components/Header"
import Presentation from "./components/Presentation";
import Project from "./components/Project";
import projectData from "./projectData";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import About from "./components/About"
import WipMain from "./components/WipMain"
import Wip from "./components/Wip";
import wipData from "./wipData"

export default function App() {

  const [projects, setProjects] = React.useState(projectData)
  const [wipProjects, setWipProjects] = React.useState(wipData)
  const [quote, setQuote] = React.useState([])

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
    )
  })

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
    )
  })

  React.useEffect(function(){
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
  },[])


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <><Presentation /> {projectsElement}</>} />
        <Route path="/about" element={<About />} />
        <Route path="/wip" element={ <> <WipMain /> {wipElement} </>} />
      </Routes>    
      <Footer quote={quote.content}/>
    </div>
  );
}

