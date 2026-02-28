import { useEffect, useState } from 'react'

function Navbar({ lang, setLang }) {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'guestbook', 'contact']
    const navbarOffset = 80

    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarOffset
      let current = 'home'

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element && scrollPosition >= element.offsetTop) {
          current = id
        }
      })

      setActiveSection((prev) => (prev !== current ? current : prev))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (id) => (event) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(id)
  }

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
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={handleNavClick('home')}>
            {lang === 'pt' ? 'Início' : 'Home'}
          </a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about" onClick={handleNavClick('about')}>
            {lang === 'pt' ? 'Sobre' : 'About'}
          </a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={handleNavClick('projects')}>
            {lang === 'pt' ? 'Projetos' : 'Projects'}
          </a>
        </li>
        <li className={activeSection === 'skills' ? 'active' : ''}>
          <a href="#skills" onClick={handleNavClick('skills')}>
            {lang === 'pt' ? 'Habilidades' : 'Skills'}
          </a>
        </li>
        <li className={activeSection === 'guestbook' ? 'active' : ''}>
          <a href="#guestbook" onClick={handleNavClick('guestbook')}>
            {lang === 'pt' ? 'Livro de visitas' : 'Guestbook'}
          </a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={handleNavClick('contact')}>
            {lang === 'pt' ? 'Contato' : 'Contact'}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar