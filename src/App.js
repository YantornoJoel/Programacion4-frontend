import React from "react";

import "./assets/css/App.css";

// Importar componentes

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import SeccionPruebas from "./components/SeccionPruebas";
// import Peliculas from "./components/Peliculas";
import Router from "./Router";
function App() {
  var buttonString = "Ir al Blog";
  return (
    <div className="App">
      <Header />

      <Slider title="Bienvenido al BLOG de NSLP" btn={buttonString} />

      <div className="center">
        {/* <Peliculas /> */}

        <Router />
        <Sidebar />

        <div className="clearfix"></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
