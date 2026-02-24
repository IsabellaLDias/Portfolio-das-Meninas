import whatsIcon from '../../assets/icons/whats.png';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import twitterIcon from '../../assets/icons/twitter.png';
function Footer({ lang }) {
  const name = 'Maria' // ajuste se quiser outro nome
  const copy = lang === 'pt'
    ? `Todos os direitos reservados © 2026 ${name}`
    : `All rights reserved © 2026 ${name}`

  return (
    <footer className="footer">

      <h3 className="footer-name">{name}</h3>

      <div className="footer-socials">
            <img src={whatsIcon} alt="website" />
            <img src={githubIcon} alt="github" />
            <img src={linkedinIcon} alt="linkedin" />
            <img src={twitterIcon} alt="twitter" />
      </div>

      <p className="footer-copy">
        {copy}
      </p>

    </footer>
  )
}

export default Footer