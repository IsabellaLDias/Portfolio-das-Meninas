import { useState, useEffect } from 'react';
import laptop from "../../assets/images/laptop.png";

function Skills({ lang }) {
  // Ajustado para skillsData para bater com o seu .map()
  const [skillsData, setSkillsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllLanguages = async () => {
      try {
        const username = 'mariaoliveira27'; 
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposResponse.json();

        const languageStats = {};

        await Promise.all(
          repos.map(async (repo) => {
            if (!repo.fork) { 
              const langRes = await fetch(repo.languages_url);
              const langs = await langRes.json();
              
              Object.keys(langs).forEach((lang) => {
                languageStats[lang] = (languageStats[lang] || 0) + langs[lang];
              });
            }
          })
        );

        const totalBytes = Object.values(languageStats).reduce((a, b) => a + b, 0);
        
        const formattedSkills = Object.entries(languageStats)
          .map(([name, value]) => ({
            name,
            percent: Math.round((value / totalBytes) * 100)
          }))
          .filter(skill => skill.percent > 1) 
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 8); 

        // CORREÇÃO: Nome da função deve ser o mesmo do useState
        setSkillsData(formattedSkills);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados globais:", error);
        setLoading(false);
      }
    };

    fetchAllLanguages();
  }, []); // Array de dependências vazio para rodar apenas uma vez

  const title = lang === 'pt' ? 'Habilidades' : 'Skills';
  const text = lang === 'pt'
    ? 'Gosto de criar coisas que vivem na internet, sejam sites, aplicações ou qualquer coisa entre esses dois mundos.'
    : 'I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.';

  return (
    <section id="skills" className="skills relative">
      <div className="skills-left">
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="skills-grid">
          {loading ? (
            <p>Carregando skills...</p>
          ) : (
            skillsData.map((skill) => (
              <SkillCircle 
                key={skill.name} 
                percent={skill.percent} 
                name={skill.name} 
              />
            ))
          )}
        </div>
      </div>

      <div className="skills-image">
        <img src={laptop} alt="Laptop" />
      </div>

      <button
        type="button"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-10 flex items-center gap-2 text-deep-purple font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>
    </section>
  );
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
        <div className="inner">{percent}%</div>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Skills;