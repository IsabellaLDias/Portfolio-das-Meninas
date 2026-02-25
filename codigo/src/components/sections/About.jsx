import profile from "../../assets/images/profile.png";

function About({ lang }) {
  const title = lang === 'pt' ? 'Sobre mim' : 'About Me'
  const text = lang === 'pt'
    ? 'Estudante de Engenharia de Software, inquisitiva e com habilidades de liderança, buscando aplicar sólidos conhecimentos de desenvolvimento com foco em colaboração, comunicação e paixão.'
    : 'An inquisitive Software Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.'
  const buttonLabel = lang === 'pt' ? 'Baixar CV' : 'Download CV'

  return (
    <section id="about" className="about">
      
      <div className="about-image">
        <img src={profile} alt="Profile" />
      </div>

      <div className="about-content">
        <h2>{title}</h2>

        <p>
          {text}
        </p>

        <button className="cv-button">
          {buttonLabel}
        </button>
      </div>
      {/* Indicador de Scroll como botão */}
      <button
        type="button"
        onClick={() => {
          const nextSection = document.getElementById('projects')
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

export default About