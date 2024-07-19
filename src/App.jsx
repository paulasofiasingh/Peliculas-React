// Este componente es el que tiene que manejar las rutas y las vistas

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DetallePelicula } from "./pages/DetallePelicula";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* acá adentro voy a trabajar con rutas */}
      <header>
        <Link to="/">
          <h1 className="title">PELÍCULAS</h1>
        </Link>
      </header>
      <Routes>
        {" "}
        {/* acá adentro voy a definir rutas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/pelicula/:peliculaId" element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
