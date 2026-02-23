function Contact() {
  return (
    <section className="contact">

      <div className="contact-left">
        <h2>Contact</h2>
        <h3>Drop me a line.</h3>
        <p>I would like to hear from you.</p>
      </div>

      <div className="contact-right">
        <h2>Get in Touch</h2>

        <form className="contact-form">
          <input 
            type="text" 
            placeholder="Name" 
            name="name"
          />

          <input 
            type="email" 
            placeholder="Email" 
            name="email"
          />

          <textarea 
            placeholder="Message"
            name="message"
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact