import laptop from "../../assets/images/laptop.png";
function Skills() {
  return (
    <section className="skills">

      <div className="skills-left">
        <h2>Skills</h2>

        <p>
          I enjoy creating things that live on the internet,
          whether that be websites, applications, or
          anything in between.
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