import whatsIcon from '../../assets/icons/whats.png';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import twitterIcon from '../../assets/icons/twitter.png';
function Footer() {
  return (
    <footer className="footer">

      <h3 className="footer-name">aaaa</h3>

      <div className="footer-socials">
            <img src={whatsIcon} alt="website" />
            <img src={githubIcon} alt="github" />
            <img src={linkedinIcon} alt="linkedin" />
            <img src={twitterIcon} alt="twitter" />
      </div>

      <p className="footer-copy">
        All Rights Reserved © 2026 a
      </p>

    </footer>
  )
}

export default Footer