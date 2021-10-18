import styles from './ShowCase.module.scss';

const HOMES_DATA = {
  home1: {
    sold: true,
    data: [
      <p>
        70m<sup>2</sup> de construcción
      </p>,
      <p>Terreno 8x30m</p>,
      <p>2 recámaras, 1 baño, cocina integral, sala y comedor</p>,
      <p>Tinaco de 1, 100lts y boiler de paso</p>,
      <p>
        Acabados: Puertas de madera, barra porcelanato, muros de yeso pulido,
        vitropiso cerámico, ventanas de aluminio
      </p>,
    ],
  },
  home2: {
    sold: false,
    data: [
      <p>
        60m<sup>2</sup> de construcción
      </p>,
      <p>Terreno 8x24m</p>,
      <p>2 recámaras, 1 baño, cocina, sala y comedor</p>,
      <p>Tinaco de 1, 100lts y boiler de paso</p>,
      <p>
        Acabados: Puertas de madera, muros de yeso pulido, vitropiso cerámico,
        ventanas de aluminio
      </p>,
    ],
  },
  home3: {
    sold: true,
    data: [
      <p>
        46m<sup>2</sup> de construcción
      </p>,
      <p>Terreno 7x24m</p>,
      <p>2 recámaras, 1 baño, cocina, sala/comedor</p>,
      <p>Tinaco de 1, 100lts y boiler de paso</p>,
      <p>
        Acabados: Puertas de madera, muros de yeso pulido, vitropiso cerámico,
        ventanas de aluminio
      </p>,
    ],
  },
  home4: {
    coming: true,
    sold: false,
    data: [
      <p>
        45m<sup>2</sup> de construcción
      </p>,
      <p>Terreno 8x24m</p>,
      <p>2 recámaras, 1 baño, cocina, sala/comedor</p>,
      <p>Tinaco de 1, 100lts y boiler de paso</p>,
      <p>
        Acabados: Puertas de madera, muros de yeso pulido, vitropiso cerámico,
        ventanas de aluminio
      </p>,
    ],
  },
};

const Home = ({ id }) => (
  <div className={styles.card}>
    <div className={styles.home}>
      <div
        className={styles.front}
        style={{ backgroundImage: `url(${id}.jpg)` }}
      >
        <div className={styles.tap}>
          <img height="25" src="tap.png" />
        </div>
        {HOMES_DATA[id].sold && <span className={styles.sold}>Vendida</span>}
        {HOMES_DATA[id].coming && (
          <span className={styles.coming}>Próximamente</span>
        )}
      </div>
      <div className={styles.back}>
        <p>
          <b>Características:</b>
        </p>
        <ul>
          {(HOMES_DATA[id].data || []).map((line, i) => (
            <li key={`line-${i}`}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function ShowCase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <h1 style={{ color: 'white' }}>
          Encuentra tu nuevo hogar con{' '}
          <img style={{ marginLeft: 5 }} height="50" src="logo-white.png" />
        </h1>
        <div className={styles.homes}>
          <Home id="home1" />
          <Home id="home3" />
          <Home id="home2" />
          <Home id="home4" />
        </div>
      </div>
    </section>
  );
}
