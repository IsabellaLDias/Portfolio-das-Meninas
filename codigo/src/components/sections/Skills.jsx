import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiSpringboot, SiC, SiMysql, SiPostgresql, SiJirasoftware } from "react-icons/si";

function Skills({ lang }) {
  const title = lang === 'pt' ? 'Habilidades' : 'Skills';
  const text = lang === 'pt'
    ? 'Estas são as principais tecnologias e competências técnicas que utilizo no meu dia a dia como Product Owner e Desenvolvedora Front-end.'
    : 'These are the main technologies and technical skills I use daily as a Product Owner and Front-end Developer.';

  const techSkills = [
    { namePt: 'Java', nameEn: 'Java', Icon: FaJava },
    { namePt: 'C', nameEn: 'C', Icon: SiC },
    { namePt: 'JavaScript', nameEn: 'JavaScript', Icon: FaJs },
    { namePt: 'HTML5', nameEn: 'HTML5', Icon: FaHtml5 },
    { namePt: 'CSS3', nameEn: 'CSS3', Icon: FaCss3Alt },
    { namePt: 'React', nameEn: 'React', Icon: FaReact },
    { namePt: 'Spring Boot', nameEn: 'Spring Boot', Icon: SiSpringboot },
    { namePt: 'SQL', nameEn: 'SQL', Icon: SiMysql },
    { namePt: 'PostgreSQL', nameEn: 'PostgreSQL', Icon: SiPostgresql },
    { namePt: 'Git', nameEn: 'Git', Icon: FaGitAlt },
    { namePt: 'Docker', nameEn: 'Docker', Icon: FaDocker },
    { namePt: 'Jira', nameEn: 'Jira', Icon: SiJirasoftware },
  ];

  const productSkills = [
    {
      namePt: 'Product Ownership',
      nameEn: 'Product Ownership',
      short: 'PO',
    },
    {
      namePt: 'Gestão de Backlog',
      nameEn: 'Backlog Management',
      short: 'Backlog',
    },
    {
      namePt: 'User Stories & Critérios de Aceite',
      nameEn: 'User Stories & Acceptance Criteria',
      short: 'User Stories',
    },
    {
      namePt: 'Planejamento de Sprint (Scrum/Kanban)',
      nameEn: 'Sprint Planning (Scrum/Kanban)',
      short: 'Scrum/Kanban',
    },
  ];

  return (
    <section id="skills" className="skills relative">
      <div className="skills-left">
        <h2>{title}</h2>
        <p>{text}</p>

        <h3 className="skills-subtitle">
          {lang === 'pt' ? 'Linguagens & Tecnologias' : 'Languages & Technologies'}
        </h3>
        <div className="skills-grid">
          {techSkills.map((skill) => {
            const label = lang === 'pt' ? skill.namePt : skill.nameEn;
            const Icon = skill.Icon;
            return (
              <div key={label} className="skill-item">
                <div className="skill-icon">
                  <Icon size={34} />
                </div>
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="skills-right">
        <h3 className="skills-subtitle">
          {lang === 'pt' ? 'Gestão de Produto' : 'Product Management'}
        </h3>
        <div className="skills-grid skills-grid-product">
          {productSkills.map((skill) => {
            const label = lang === 'pt' ? skill.namePt : skill.nameEn;
            return (
              <div key={label} className="skill-item skill-item-product">
                <div className="skill-icon skill-icon-product">
                  {skill.short}
                </div>
                <p>{label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-10 flex items-center gap-2 text-[#E0BBE4] font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>
    </section>
  );
}

export default Skills;