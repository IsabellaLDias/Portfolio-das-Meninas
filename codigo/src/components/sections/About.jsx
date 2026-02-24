import profile from "../../assets/images/profile.png";

function About({ lang }) {
  const title = lang === 'pt' ? 'Sobre mim' : 'About Me'
  const text = lang === 'pt'
    ? 'Estudante de Engenharia de Computação, curiosa e apaixonada por desenvolvimento, liderança e colaboração.'
    : 'An inquisitive Computer Science Engineering student, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.'
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
      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-10 flex items-center gap-2 text-deep-purple font-medium animate-bounce">
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </div>
    </section>
  )
}

export default About