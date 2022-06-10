import React from "react";
import { HeaderItm } from "./components/header/HeaderItm";
import Carousel, { CarouselItem } from "./components/content/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import Footer from "./components/footer/Footer";

import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Login />

      {/* Header */}

      <HeaderItm />

      {/* Navbar */}

      <NavbarComp />

      {/* Carrusel de imagenes */}

      <Carousel>
        <CarouselItem>
          <div>
            <img
              src={require("./assets/CarouselImages/prov1.jpg")}
              alt="logoSep"
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div>
            <img
              src={require("./assets/CarouselImages/prov2.jpg")}
              alt="logoSep"
            />
          </div>
        </CarouselItem>

        <CarouselItem>
          <div>
            <img
              src={require("./assets/CarouselImages/prov3.jpg")}
              alt="logoSep"
            />
          </div>
        </CarouselItem>
      </Carousel>

      {/* Informacion Textual */}

      <Carousel>
        <CarouselItem>
          <div>
            <h1>Introducción</h1>
            <h2>¡INSCRIPCIONES ABIERTAS!</h2>
            <p>
              Debido a la contingencia por el COVID-19, las solicitudes de
              ingreso al programa <br />
              se estarán recibiendo por correo electrónico en la dirección
              <br />
              <strong> posgrado.electronica@morelia.tecnm.mx </strong>
            </p>

            <h4> Introducción </h4>
            <p>
              El programa de Maestría en Ciencias en Ingeniería Electrónica
              tiene una visión de desarrollo bien definida en las áreas de{" "}
              <br />
              Procesamiento de Señales y Electrónica de Potencia. Cuenta con
              instalaciones e infraestructura adecuadas para el buen <br />
              desempeño del estudiante, tales como: aulas, laboratorios,
              espacios físicos para estudio, equipo de cómputo, centro de <br />
              información, Internet y áreas deportivas. Además cuenta con una
              sólida y reconocida planta de profesores <br />
              investigadores.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Objetivo</h1>
            <h2>Objetivo de la Maestría</h2>
            <p>
              Formar profesionistas con especialización en áreas de
              Procesamiento de Señales y Electrónica de Potencia, que logren{" "}
              <br />
              incorporarse a instituciones de investigación y desarrollo
              tecnológico, industrias de base tecnológica y docencia
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Líneas de Generación y Aplicación del Conociemiento </h1>
            <div className="flex">
              <div>
                <h2>Procesamiento de Señales:</h2>
                <p>Aplicaciones en Telemetría y TICs</p>
                <p>Aplicaciones en Instrumentación y Control</p>
                <p>Sistemas Embebidos</p>
                <p>Redes Inteligentes</p>
              </div>
              <div>
                <h2>Electrónica de Potencia:</h2>
                <p>Energías Renovables</p>
                <p>Sistemas de Iluminación</p>
                <p>Calidad de la Energía</p>
              </div>
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <br />

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default App;
