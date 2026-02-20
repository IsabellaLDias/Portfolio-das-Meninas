import profile from "../../assets/images/profile.png";

function About() {
  return (
    <section className="about">
      
      <div className="about-image">
        <img src={profile} alt="Profile" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        <p>
          An inquisitive Computer Science Engineering student,
          skilled in leadership, seeking to leverage solid
          development skills with focus on collaboration,
          communication and passion.
        </p>

        <button className="cv-button">
          Download CV
        </button>
      </div>

    </section>
  )
}

export default About