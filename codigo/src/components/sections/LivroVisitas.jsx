import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import emailjs from "emailjs-com";

const LivroVisitas = ({ lang }) => {

  // 🌍 TEXTOS (igual Contact)
  const title = lang === 'pt' ? 'Livro de Visitas' : 'Guestbook';
  const placeholderName = lang === 'pt' ? 'Nome' : 'Name';
  const placeholderMessage = lang === 'pt' ? 'Mensagem' : 'Message';
  const buttonLabel = lang === 'pt' ? 'Enviar' : 'Send';
  const showLabel = lang === 'pt' ? 'Ver mensagens' : 'View messages';
  const hideLabel = lang === 'pt' ? 'Ocultar mensagens' : 'Hide messages';

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 🔄 Buscar mensagens
  async function fetchMessages() {
    setLoading(true);

    const { data, error } = await supabase
      .from("guestbook_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setMessages(data);
    }

    setLoading(false);
  }

  // 📩 Enviar mensagem
  async function handleSubmit(e) {
    e.preventDefault();

    const now = new Date();
    const time = now.toLocaleString();

    const { error } = await supabase
      .from("guestbook_messages")
      .insert([{ name, message }]);

    if (error) {
      console.error(error);
      return;
    }

    // 📧 Email notification
    const serviceID = 'service_hj8348s';
    const templateID = 'template_g4mwunn';
    const publicKey = '9EbzCaeAM6iAyqmH4';

    emailjs.send(
      serviceID,
      templateID,
      {
        name: name,
        email: "guestbook@portfolio.com",
        message: message,
        title: `Nova mensagem no guestbook`,
        time: time,
      },
      publicKey
    );

    // limpa campos
    setName("");
    setMessage("");
  }

  return (
    <section className="guestbook-section">

      <div className="guestbook-left">
        <h2>{title}</h2>
      </div>

      <div className="guestbook-right">

        <form
          className="guestbook-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder={placeholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">
            {buttonLabel}
          </button>
        </form>

        {/* 🔘 BOTÃO PARA MOSTRAR / OCULTAR */}
        <button
          className="guestbook-toggle-btn"
          onClick={() => {
            if (!showMessages) fetchMessages();
            setShowMessages(!showMessages);
          }}
        >
          {showMessages ? hideLabel : showLabel}
        </button>

        {/* 📜 LISTA DE MENSAGENS */}
        {showMessages && (
          <div className="guestbook-messages">
            {loading && <p>Loading...</p>}

            {messages.map((msg) => (
              <div key={msg.id} className="guestbook-card">
                <strong>{msg.name}</strong>
                <span>
                  {new Date(msg.created_at).toLocaleDateString()}
                </span>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default LivroVisitas;