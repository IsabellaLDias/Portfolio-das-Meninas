import { useState } from "react"
import gradeGif from "../../assets/images/Grade Inteligente.gif"
import cineScoreGif from "../../assets/images/CineScore.gif"
import giostriGif from "../../assets/images/Giostri Construções.gif"
import detoursGif from "../../assets/images/Detours Informática.gif"

function Projects({ lang }) {
  const projects = [
    {
      // 1. Grade Inteligente
      title: "Grade Inteligente",
      period: lang === 'pt' ? "Jan 2024 – Dez 2024" : "Jan 2024 – Dec 2024",
      description:
        lang === 'pt'
          ? "Sistema acadêmico focado na organização de disciplinas e acompanhamento do progresso dos estudantes, com interface web acessível e integração com backend em Java."
          : "Academic system focused on organizing courses and tracking students’ progress, with an accessible web interface and integration with a Java backend.",
      image: gradeGif,
      tech: ["JavaScript", "HTML", "CSS", "Java", "Spring Boot", "Docker"],
      githubUrl: "https://github.com/agencia-experimental-de-software/PMG-ES-2023-2-EXT-GradeInteligente"
    },
    {
      // 2. CineScore
      title: "CineScore",
      period: lang === 'pt' ? "Ago 2024 – Dez 2024" : "Agu 2024 – Dec 2024",
      description:
        lang === 'pt'
          ? "Site de recomendação de filmes e séries, que sugere conteúdos com base na lista pessoal do usuário e em suas avaliações."
          : "Movie and TV show recommendation site that suggests content based on the user’s personal list and ratings.",
      image: cineScoreGif,
      tech: ["JavaScript", "HTML", "CSS", "REST APIs"],
      githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3687100-cinescore"
    },
    {
      // 3. Giostri Construções
      title: "Giostri Construções – E-commerce",
      period: lang === 'pt' ? "Jan 2025 – Jun 2025" : "Jan 2025 – Jun 2025",
      description:
        lang === 'pt'
          ? "Plataforma de e-commerce para empresa de construção, com foco em fluxo de compra, catálogo de produtos e gestão de pedidos."
          : "E-commerce platform for a construction company, focused on purchase flow, product catalog, and order management.",
      image: giostriGif,
      tech: ["JavaScript", "HTML", "CSS", "Git"],
      githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti3-9545100-giostri-construcoes"
    },
    {
      // 4. Detours Informática
      title: "Detours Informática – Otimização de Fluxos e UI",
      period: lang === 'pt' ? "Jul 2025 – Dez 2025" : "Jul 2025 – Dec 2025",
      description:
        lang === 'pt'
          ? "Projeto voltado à otimização do fluxo de contratação de serviços, com tela de contratação em múltiplas etapas e painel administrativo."
          : "Project focused on optimizing the service hiring flow, with a multi-step hiring interface and admin dashboard.",
      image: detoursGif,
      tech: ["JavaScript", "HTML", "CSS", "Git"],
      githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti4-3126100-detours-informatica"
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
        <p className="project-period">{project.period}</p>

        <div className="project-text">
          <p>{project.description}</p>

          <div className="tech-tags">
            {project.tech.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {lang === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
          </a>
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
        className="absolute bottom-8 left-10 flex items-center gap-2 text-[#E0BBE4] font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>

    </section>
  )
}

export default Projects