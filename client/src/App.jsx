import React from "react";
import { HeaderItm } from "./components/header/HeaderItm";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import Footer from "./components/footer/Footer";
import { Home } from "./pages/home"
import { Info } from "./pages/info"
import { Collab } from "./pages/collab"
import { Alumnos } from "./pages/alumnos"
import { Personal } from "./pages/personal"
import { Login } from "./pages/login"
import { NotFound} from "./pages/notFound"

function App() {
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