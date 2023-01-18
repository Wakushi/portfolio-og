import React from "react"
import Header from "./components/Header"
import Presentation from "./components/Presentation";
import Project from "./components/Project";
import projectData from "./projectData";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import About from "./components/About"

export default function App() {

  const [projects, setProjects] = React.useState(projectData)
  const [quote, setQuote] = React.useState([])

  const projectsElement = projects.map((project) => {
    return (
      <Project
        img={project.img}
        desc={project.desc}
        type={project.type}
        title={project.title}
      />
    )
  })

  React.useEffect(function(){
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
  },[])

  console.log(quote)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <><Presentation /> {projectsElement}</>} />
        <Route path="/about" element={<About />} />
      </Routes>    
      <Footer quote={quote.content}/>
    </div>
  );
}

