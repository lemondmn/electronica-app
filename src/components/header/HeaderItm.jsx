import React, { Fragment } from 'react';
import styles from "./HeaderStyle.module.css";

export function HeaderItm() {
  return (

    <div>

      {/* Barra superior */}

      <div className={styles.gob}>

        <a href='https://www.gob.mx/'>
          <img
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            alt="logo01"
            width="128"
            height="48"
          />
        </a>
      </div>

      {/* Barra de logos */}

      <div>

        <br />
        <div className={styles.logos} >

          {/* Logo Educacion */}

          <a href='https://www.gob.mx/sep'>
            <img
              src={require('../../assets/educacionLogo2.png')}
              alt="logoSep"
              height={'100px'}
              width={'350px'}
            />
          </a>

          {/* Logo Itm */}

          <a href='https://www.tecnm.mx/'>
            <img
              src={require('../../assets/LogoTecnm.png')}
              alt="logoTNM"
              height={'100px'}
              width={'205px'}
            />
          </a>

          {/* Titulo pagina */}

          <img
            src={require('../../assets/tituloTexto.png')}
            alt="tituloMaestria"
            height={'100px'}
            width={'610px'}
          />

          {/* Logo itmorelia */}

          <a href='https://www.morelia.tecnm.mx/#/'>
            <img
              src={require('../../assets/LogoITM.png')}
              alt="logoITM"
              height={'100px'}
              width={'100px'}
            />
          </a>
        </div>

      </div>

    </div>

  )
}
