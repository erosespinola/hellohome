import { useEffect } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animated);
        }
      });
    });

    observer.observe(document.querySelector(`.${styles['hero-img']}`));
  });

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.left}>
            <h1>Construyendo el hogar de tus sueños</h1>
            <p>
              En <b>Hello Home</b> nuestra misión es construir el hogar que
              buscas y sueñas para ti y tu familia, por eso ofrecemos los
              mejores desarrollos con acabados de primera y el mejor servicio
              inmobiliario ¡Aceptamos todo tipo de crédito!
            </p>
          </div>
          <div className={styles.right}>
            <img className={styles['hero-img']} src="hero.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
