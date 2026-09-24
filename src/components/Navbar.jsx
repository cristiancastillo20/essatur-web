import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

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
  className={`transition-opacity duration-500 ${
    scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
  }`}
>
  <img src="/logo-essatur.png" alt="ESSATUR" className="h-13 w-auto" />
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-full transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link
            to="/contacto"
            onClick={closeMenu}
            className={`text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-500 ${
              scrolled
                ? "bg-route text-white hover:brightness-110"
                : "bg-white text-black hover:brightness-90"
            }`}
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
          <a href="/#hero" onClick={closeMenu} className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Inicio
          </a>
          <a href="/#nosotros" onClick={closeMenu} className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Nosotros
          </a>
          <a href="/#servicios" onClick={closeMenu} className="block px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Servicios
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;