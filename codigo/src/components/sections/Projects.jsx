import { useState } from "react"
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"

function Projects() {
  const projects = [
    {
      title: "Simon Game",
      description:
        "Interactive memory game built with JavaScript.",
      image: project1,
      tech: ["HTML5", "CSS3", "JavaScript", "ReactJS"]
    },
    {
      title: "Portfolio Website",
      description:
        "Personal responsive portfolio website.",
      image: project2,
      tech: ["ReactJS", "CSS3"]
    }
  ]

  const [index, setIndex] = useState(0)

  function nextProject() {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  const project = projects[index]

  return (
    <section className="projects">

      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h2>Projects</h2>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <button className="next-btn" onClick={nextProject}>
          →
        </button>

        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

    </section>
  )
}

export default Projects