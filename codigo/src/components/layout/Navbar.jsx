function Navbar({ lang, setLang }) {
  return (
    <nav className="navbar">
      <div className="language">
        <span
          className="language-icon"
          role="img"
          aria-label={lang === 'pt' ? 'Alterar idioma do site' : 'Change site language'}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <path d="M3 12h18M12 3c2.5 2 4 4.5 4 9s-1.5 7-4 9" />
            </g>
          </svg>
        </span>
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
        <li><a href="#projects">{lang === 'pt' ? 'Projetos' : 'Projects'}</a></li>
        <li><a href="#skills">{lang === 'pt' ? 'Habilidades' : 'Skills'}</a></li>
        <li><a href="#contact">{lang === 'pt' ? 'Contato' : 'Contact'}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar