import { useRef, useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
  const name = useRef();
  const subject = useRef();
  const message = useRef();
  const send = useRef();

  const generateLink = () => {
    send.current.setAttribute(
      'href',
      `mailto:hellohomebcs@gmail.com?subject=[${name.current.value}] ${subject.current.value}&body=${message.current.value}`,
    );
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h1>Contáctanos</h1>
        <img className={styles.banner} src="contact.jpg" />
        <div className={styles.form}>
          <h2>Correo</h2>
          <input ref={name} placeholder="Nombre" required />
          <input ref={subject} placeholder="Asunto" required />
          <textarea ref={message} placeholder="Mensaje" required />

          <a href="#" target="_blank" ref={send} onClick={generateLink}>
            Enviar
          </a>

          <h2>Teléfono</h2>
          <a href="tel:+52 612 104 1260">612 104 1260</a>

          <h2>Redes Sociales</h2>
          <a target="_blank" href="https://www.facebook.com/HelloHome.bcs/">
            <img src="fb.png" height="25" />
            Hello Home SA de CV
          </a>
          <a target="_blank" href="https://instagram.com/hellohome.bcs">
            <img src="instagram.svg" height="25" />
            hellohome.bcs
          </a>
        </div>
      </div>
    </section>
  );
}
