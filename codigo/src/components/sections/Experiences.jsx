import React, { useState } from "react";
import agencyImage from "../../assets/images/Agência Experimental.png";

const Experiences = ({ lang }) => {
  const title = lang === 'pt' ? 'Experiências' : 'Experiences';
  const intro = lang === 'pt'
    ? 'Espaço para relatar experiências profissionais, estágios, freelas, participações em projetos open source ou eventos técnicos.'
    : 'Space to share professional experiences, internships, freelance work, contributions to open source projects or tech events.';

  const experiences = [
    {
      companyPt: 'Grade Inteligente - Agência Experimental',
      companyEn: 'Grade Inteligente - Experimental Agency',
      rolePt: 'Desenvolvedora Front-end',
      roleEn: 'Front-end Developer',
      periodPt: 'Período: 2024',
      periodEn: 'Period: 2024',
      descriptionPt:
        'Atuação como desenvolvedora front-end na agência experimental de software da PUC Minas, construindo e aprimorando telas web responsivas para o produto Grade Inteligente em colaboração com colegas e professores orientadores.',
      descriptionEn:
        'Worked as a front-end developer at the PUC Minas experimental software agency, building and improving responsive web screens for the Grade Inteligente product in collaboration with teammates and faculty advisors.',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextExperience = () => {
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const exp = experiences[index];
  const company = lang === 'pt' ? exp.companyPt : exp.companyEn;
  const role = lang === 'pt' ? exp.rolePt : exp.roleEn;
  const period = lang === 'pt' ? exp.periodPt : exp.periodEn;
  const description = lang === 'pt' ? exp.descriptionPt : exp.descriptionEn;

  return (
    <section id="experiences" className="experiences-section relative">
      <div className="experiences-left">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      <div className="experiences-right">
        <div>
          <article className="experience-card">
            <div className="experience-image-wrapper">
              <img src={agencyImage} alt={company} className="experience-image" />
            </div>
            <div className="experience-content">
              <h3>{company}</h3>
              <p className="experience-role">
                <strong>{role}</strong>
              </p>
              <p className="experience-period">{period}</p>
              <p className="experience-description">{description}</p>
            </div>
          </article>

          <div className="project-controls">
            <button className="prev-btn" onClick={prevExperience}>
              ←
            </button>
            <button className="next-btn" onClick={nextExperience}>
              →
            </button>
            <span className="project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-10 flex items-center gap-2 text-[#E0BBE4] font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>
    </section>
  );
};

export default Experiences;

