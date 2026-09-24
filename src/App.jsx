import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import PoliticaDatos from "./pages/PoliticaDatos";
import Terminos from "./pages/Terminos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/politica-de-datos" element={<PoliticaDatos />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
}

export default App;