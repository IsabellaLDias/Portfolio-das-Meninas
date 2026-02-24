function Navbar({ lang, setLang }) {
  return (
    <nav className="navbar">
      <div className="language">
        <span
          onClick={() => setLang('pt')}
          style={{ fontWeight: lang === 'pt' ? '700' : '400' }}
        >
          PT
        </span>
        {' | '}
        <span
          onClick={() => setLang('en')}
          style={{ fontWeight: lang === 'en' ? '700' : '400' }}
        >
          EN
        </span>
      </div>

      <ul className="nav-links">
        <li className="active"><a href="#home">{lang === 'pt' ? 'Início' : 'Home'}</a></li>
        <li><a href="#about">{lang === 'pt' ? 'Sobre' : 'About'}</a></li>
        <li><a href="#skills">{lang === 'pt' ? 'Habilidades' : 'Skills'}</a></li>
        <li><a href="#projects">{lang === 'pt' ? 'Projetos' : 'Projects'}</a></li>
        <li><a href="#contact">{lang === 'pt' ? 'Contato' : 'Contact'}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar