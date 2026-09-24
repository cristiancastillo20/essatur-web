import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} ESSATUR SAS. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/politica-de-datos" className="hover:text-white transition-colors">
            Política de datos
          </Link>
          <Link to="/terminos" className="hover:text-white transition-colors">
            Términos y condiciones
          </Link>
          <Link to="/contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;