import React, { Fragment } from 'react';
import styles from "./HeaderStyle.module.css";

export function HeaderItm() {
  return (
        
    <div>

      <div className={styles.gobMex}>

        <a href='https://www.gob.mx/'>
          <img 
            src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"
            alt="logo01"
            width="128"
            height="48"
          />
        </a>
      </div>

      <div>

        <br/>
        <div className={styles.instituciones} >
          <a href='https://www.gob.mx/'>
            <img 
              src={require('../../assets/gob1.png')}
              alt="logoGob"
            />
          </a>
          <a href='https://www.gob.mx/sep'>
            <img 
              src={require('../../assets/sep.png')}
              alt="logoSep"
            />
          </a>
          <a href='https://www.tecnm.mx/'>
            <img 
              src={require('../../assets/itm.png')}
              alt="logoTM"
            />
          </a>
        </div>
        <br/>
        
      </div>
      
    </div>

  )
}
