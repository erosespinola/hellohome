import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.menu}>
      <div>
        <img className={styles.logo} src="./logo.png"></img>
        <span className={styles.brand}>Hello Home</span>
      </div>
      <a href="#contact">Contáctanos</a>
    </nav>
  );
}
