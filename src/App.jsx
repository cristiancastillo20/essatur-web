import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import PoliticaDatos from "./pages/PoliticaDatos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politica-de-datos" element={<PoliticaDatos />} />
    </Routes>
  );
}

export default App;