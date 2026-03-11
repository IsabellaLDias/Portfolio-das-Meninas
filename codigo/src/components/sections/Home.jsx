import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home = ({ lang }) => {
  const [showRoom, setShowRoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoom(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen bg-lavender-main flex items-center">

      <div className="absolute top-0 right-0 h-full w-full z-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full absolute right-0"
        >
          <motion.path
            fill="#ffffff"
            initial={{
              d: "M 100 0 L 100 0 C 100 0 100 0 100 0 L 100 100 L 100 100 C 100 100 100 100 100 100 Z"
            }}
            animate={{
              d: "M 100 0 L 40 0 C 60 30 20 50 50 100 L 100 100 Z"
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </svg>
      </div>

      {/* --- 3. Conteúdo Principal (Texto) --- */}
      <div className="relative z-20 container mx-auto px-8 ml-10">
        <div className="space-y-2">

          {/* Texto "NOME" com efeito de contorno (Outline) */}
          <h2 className="text-7xl font-bold tracking-wider text-transparent"
            style={{ WebkitTextStroke: '2px #4A2c4A' }}>
            ISABELLA DIAS
          </h2>

          <h3 className="text-3xl font-bold text-deep-purple">
            {lang === 'pt'
              ? 'Engenheira + Desenvolvedora Front-end Júnior'
              : 'Engineer + Junior Front-end Developer'}
          </h3>

          {/* Ícones de Redes Sociais (Placeholder) */}
          <div className="flex gap-4 pt-6">
            <a href="https://github.com/IsabellaLDias"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
              <FaGithub size={35} color="#E0BBE4" /> {/* Cor lavanda para contrastar */}
            </a>
            <a href="https://linkedin.com/in/isabella-dias-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
              <FaLinkedin size={35} color="#E0BBE4" />
            </a>
            <a href="https://instagram.com/isabelladiasds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
              <FaInstagram size={35} color="#E0BBE4" />
            </a>
            <a href="https://wa.me/5531993332425"
              className="w-12 h-12 bg-deep-purple rounded-full flex items-center justify-center hover:bg-purple-800 hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer">
              <FaWhatsapp size={30} color="#E0BBE4" />
            </a>
          </div>
        </div>
      </div>


      {/* --- 3D Spline (Lado Direito) --- */}
      {showRoom && (
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-[55%] z-20 flex items-center overflow-hidden">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-imhrN7Oy4rbGExHIiwDNAXxu/"
            frameBorder="0"
            width="100%"
            height="100%"
            loading="lazy"
            title="Robô 3D do portfólio"
            style={{
              transform: 'scale(0.9) translate(205px, 100px)',
              transformOrigin: 'center top',
            }}
          ></iframe>
        </div>
      )}

      {/* Indicador de Scroll como botão */}
      <button
        type="button"
        onClick={() => {
          const nextSection = document.getElementById('about')
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="absolute bottom-8 left-10 flex items-center gap-2 text-deep-purple font-medium animate-bounce cursor-pointer focus:outline-none"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>

    </section>
  )
}

export default Home