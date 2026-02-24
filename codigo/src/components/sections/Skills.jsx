import laptop from "../../assets/images/laptop.png";
function Skills({ lang }) {
  const title = lang === 'pt' ? 'Habilidades' : 'Skills'
  const text = lang === 'pt'
    ? 'Gosto de criar coisas que vivem na internet, sejam sites, aplicações ou qualquer coisa entre esses dois mundos.'
    : 'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.'

  return (
    <section id="skills" className="skills relative">

      <div className="skills-left">
        
        <h2>{title}</h2>

        <p>
          {text}
        </p>

        <div className="skills-grid">
          <SkillCircle percent={90} name="C" />
          <SkillCircle percent={95} name="HTML5" />
          <SkillCircle percent={85} name="CSS3" />
          <SkillCircle percent={80} name="JavaScript" />
          <SkillCircle percent={90} name="SQL" />
          <SkillCircle percent={70} name="ReactJS" />
          <SkillCircle percent={50} name="ExpressJS" />
        </div>
      </div>

      <div className="skills-image">
        <img src={laptop} alt="Laptop" />
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-10 z-20 flex items-center gap-2 text-deep-purple font-medium animate-bounce">
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </div>

    </section>
  )
}

function SkillCircle({ percent, name }) {
  return (
    <div className="skill-item">
      <div
        className="circle"
        style={{
          background: `conic-gradient(#c68ad8 ${percent}%, #e5e5e5 ${percent}%)`
        }}
      >
        
        <div className="inner">
          {percent}%
        </div>
      </div>
      <p>{name}</p>
    </div>
    
  )
}

export default Skills