import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src="logo-white.png" height="50" />
      <p>
        <b>Hello Home®</b> Todos los derechos reservados.
      </p>
    </footer>
  );
}
