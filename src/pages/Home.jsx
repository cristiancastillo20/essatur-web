import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../sections/Hero";
import Nosotros from "../sections/Nosotros";
import Servicios from "../sections/Servicios";
import Cobertura from "../sections/Cobertura";

function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <WhatsAppButton />
      <div id="hero">
        <Hero />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="cobertura">
        <Cobertura />
      </div>
    </>
  );
}

export default Home;