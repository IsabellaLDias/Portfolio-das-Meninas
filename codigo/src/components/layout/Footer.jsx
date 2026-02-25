
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
function Footer({ lang }) {
  const name = 'Maria' // ajuste se quiser outro nome
  const copy = lang === 'pt'
    ? `Todos os direitos reservados © 2026 ${name}`
    : `All rights reserved © 2026 ${name}`

  return (
    <footer className="footer">

      <div className="footer-socials">
            <a href="https://github.com/SEU_USUARIO" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
               <FaGithub size={35} color="#E0BBE4" /> {/* Cor lavanda para contrastar */}
            </a>
            <a href="https://linkedin.com/in/SEU_USUARIO" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
               <FaLinkedin size={35} color="#E0BBE4" />
            </a>
            <a href="https://instagram.com/SEU_USUARIO" 
               target="_blank" 
               rel="noopener noreferrer"
               className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
               <FaInstagram size={35} color="#E0BBE4" />
            </a>
            <a href="mailto:seuemail@exemplo.com" 
               className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
               <FaEnvelope size={30} color="#E0BBE4" />
            </a>
      </div>

      <p className="footer-copy">
        {copy}
      </p>

    </footer>
  )
}

export default Footer