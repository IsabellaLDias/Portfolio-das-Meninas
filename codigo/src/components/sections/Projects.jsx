import { useState } from "react"
import project1 from "../../assets/images/project1.png"
import project2 from "../../assets/images/project2.png"

function Projects({ lang }) {
  const projects = [
    {
      title: lang === 'pt' ? "Jogo Simon" : "Simon Game",
      description:
        lang === 'pt'
          ? "Jogo da memória interativo construído com JavaScript."
          : "Interactive memory game built with JavaScript.",
      image: project1,
      tech: ["HTML5", "CSS3", "JavaScript", "ReactJS"]
    },
    {
      title: lang === 'pt' ? "Portfólio Pessoal" : "Portfolio Website",
      description:
        lang === 'pt'
          ? "Website de portfólio pessoal responsivo."
          : "Personal responsive portfolio website.",
      image: project2,
      tech: ["ReactJS", "CSS3"]
    }
  ]

  const [index, setIndex] = useState(0)

  function nextProject() {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  function prevProject() {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[index]

  return (
    <section id="projects" className="projects relative">

      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h2>{lang === 'pt' ? 'Projetos' : 'Projects'}</h2>
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <div className="project-controls">
          <button className="prev-btn" onClick={prevProject}>
            ←
          </button>
          <button className="next-btn" onClick={nextProject}>
            →
          </button>
          <span className="project-number">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
      {/* Indicador de Scroll como botão */}
      <button
        type="button"
        onClick={() => {
          const nextSection = document.getElementById('skills')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute bottom-8 left-10 flex items-center gap-2 text-deep-purple font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>

    </section>
  )
}

export default Projects