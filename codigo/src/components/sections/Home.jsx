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
    <section id="home" className="relative w-full h-screen bg-black flex items-center overflow-hidden">

      {/* --- 3. Conteúdo Principal (Texto) --- */}
      <div className="relative z-20 container mx-auto px-8 md:ml-10 flex-1">
        <div className="space-y-2 max-w-xl">

          {/* Texto "NOME" com efeito de contorno (Outline) */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-wider text-transparent"
            style={{ WebkitTextStroke: '2px #E0BBE4' }}>
            ISABELLA DIAS
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-[#E0BBE4]">
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

      {/* --- 3D Spline (lado direito, interativo) --- */}
      {showRoom && (
        <div className="relative hidden md:flex flex-1 h-full items-center justify-center z-10 overflow-hidden">
          {/* gradiente sutil no lado esquerdo para leitura do texto */}
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none" />

          <iframe
            src="https://my.spline.design/boxeshover-TiVNA6AeEaglQQyJqCLbAeUH/"
            frameBorder="0"
            width="120%"
            height="120%"
            loading="lazy"
            title="Robô 3D do portfólio"
            style={{
              border: 'none',
              transform: 'scale(1.3) translate(5%, -8%)',
              transformOrigin: 'center',
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
        className="absolute bottom-8 left-10 flex items-center gap-2 text-[#E0BBE4] font-medium animate-bounce cursor-pointer focus:outline-none z-30"
      >
        <span>↓</span> {lang === 'pt' ? 'Rolar' : 'Scroll'}
      </button>

    </section>
  )
}

export default Home