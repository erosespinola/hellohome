import { useState } from 'react';
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
    sold: true,
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
      <p>Una planta</p>,
      <p>
        92m<sup>2</sup> de construcción
      </p>,
      <p>Terreno 8x25m</p>,
      <p>3 recámaras, 2 baños, cocina, sala y comedor</p>,
      <p>Walk-in closet en recámara principal</p>,
      <p>Tinaco de 1, 100lts, cisterna de 2, 500lts y boiler eléctrico</p>,
      <p>
        Acabados: Puertas y cocina de madera alder, cocina con barra de granito, 
        muros de yeso pulido, vitropiso cerámico y ventanas de aluminio
      </p>
    ],
  }
};

const Home = ({ id }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.card}>
      <div
        onClick={() => setShow(!show)}
        className={`${styles.home} ${show ? styles.reveal : ''}`}
      >
        <div
          className={styles.front}
          style={{ backgroundImage: `url(${id}.jpg)` }}
        >
          <div className={styles.tap}>
            <img height="25" src="tap.png" />
          </div>
          {HOMES_DATA[id].sale && (
            <span className={styles.sale}>Disponible</span>
          )}
          {HOMES_DATA[id].sold && <span className={styles.sold}>Vendida</span>}
          {HOMES_DATA[id].coming && (
            <span className={styles.coming}>Próximamente</span>
          )}
        </div>
        <div className={styles.back}>
          <p className={styles.features}>
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
};

export default function ShowCase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <h1 style={{ color: 'white' }}>
          Encuentra tu nuevo hogar con{' '}
          <img style={{ marginLeft: 5 }} height="50" src="logo-white.png" />
        </h1>
        <h2 style={{ color: 'white' }}>
          Proyectos en <img src="pin.png" /> La Paz, BCS
        </h2>
        <div className={styles.homes}>
          <Home id="home4" />
        </div>
        <br/>
        <h2 style={{ color: 'white' }}>
          Proyectos en <img src="pin.png" /> Cd. Constitución, BCS
        </h2>
        <div className={styles.homes}>
          <Home id="home1" />
          <Home id="home3" />
          <Home id="home2" />
        </div>
      </div>
    </section>
  );
}
