import React from "react";
import { HeaderItm } from "./components/header/HeaderItm";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import Footer from "./components/footer/Footer";
import { Home } from "./pages/public/home"
import { Info } from "./pages/public/info"
import { Collab } from "./pages/public/collab"
import { Alumnos } from "./pages/public/alumnos"
import { Personal } from "./pages/public/personal"
import { Login } from "./pages/public/login"
import { NotFound } from "./pages/notFound"

function App() {

  const isLogged = 1;

  if (isLogged == 0) {

  } else {

  }

  return (
    <div className="App">

      {/* Header */}

      <HeaderItm />

      {/* Navbar */}

      <BrowserRouter>
        <NavbarComp />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/collab' element={<Collab />} />
          <Route path='/alumnos' element={<Alumnos />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <br />

      {/* Footer */}

      <Footer />

    </div>
  );

}

export default App;