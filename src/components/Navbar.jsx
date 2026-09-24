import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
      <div
        className={`flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-md ring-1 transition-colors duration-500 ${
          scrolled
            ? "bg-white/70 shadow-lg shadow-black/10 ring-black/5"
            : "bg-ink/75 shadow-lg shadow-black/30 ring-white/10"
        }`}
      >
        <Link
          to="/"
          className={`font-extrabold text-lg tracking-tight text-white transition-opacity duration-500 ${
            scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          ESSATUR
        </Link>

        <div
          className={`hidden md:flex items-center gap-7 text-sm font-medium transition-colors duration-500 ${
            scrolled ? "text-slate-600" : "text-slate-300"
          }`}
        >
          <a href="/#hero" className="hover:text-route transition-colors">Inicio</a>
          <a href="/#nosotros" className="hover:text-route transition-colors">Nosotros</a>
          <a href="/#servicios" className="hover:text-route transition-colors">Servicios</a>
        </div>

        <Link
          to="/contacto"
          className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-500 ${
            scrolled
              ? "bg-route text-white hover:brightness-110"
              : "bg-white text-black hover:brightness-90"
          }`}
        >
          Contáctanos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;