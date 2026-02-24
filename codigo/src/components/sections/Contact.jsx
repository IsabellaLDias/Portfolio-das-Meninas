function Contact({ lang }) {
  const titleLeft = lang === 'pt' ? 'Contato' : 'Contact'
  const subtitleLeft = lang === 'pt' ? 'Mande uma mensagem.' : 'Drop me a line.'
  const textLeft = lang === 'pt' ? 'Vou gostar de ouvir você.' : 'I would like to hear from you.'
  const titleRight = lang === 'pt' ? 'Fale comigo' : 'Get in Touch'
  const placeholderName = lang === 'pt' ? 'Nome' : 'Name'
  const placeholderEmail = lang === 'pt' ? 'E-mail' : 'Email'
  const placeholderMessage = lang === 'pt' ? 'Mensagem' : 'Message'
  const buttonLabel = lang === 'pt' ? 'Enviar mensagem' : 'Send Message'
  const scrollLabel = lang === 'pt' ? 'Topo' : 'Top'

  return (
    <section id="contact" className="contact relative">

      <div className="contact-left">
        <h2>{titleLeft}</h2>
        <h3>{subtitleLeft}</h3>
        <p>{textLeft}</p>
      </div>

      <div className="contact-right">
        <h2>{titleRight}</h2>

        <form className="contact-form">
          <input 
            type="text" 
            placeholder={placeholderName}
            name="name"
          />

          <input 
            type="email" 
            placeholder={placeholderEmail}
            name="email"
          />

          <textarea 
            placeholder={placeholderMessage}
            name="message"
            rows="5"
          ></textarea>

          <button type="submit">
            {buttonLabel}
          </button>
        </form>
      </div>

      {/* Indicador de Scroll para subir */}
      <div
        className="absolute bottom-8 right-10 z-20 flex items-center gap-2 text-deep-purple font-medium animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span>↑</span> {scrollLabel}
      </div>
    </section>
  )
}

export default Contact