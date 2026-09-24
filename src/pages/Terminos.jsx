import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

function Terminos() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <section className="bg-white min-h-screen pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6"
        >
          <span className="text-route font-bold text-sm tracking-wider uppercase">Legal</span>
          <h1 className="text-ink text-3xl md:text-4xl font-extrabold mt-2 mb-8">
            Términos y condiciones
          </h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p>
              Los siguientes términos y condiciones regulan el uso del sitio web de ESSATUR SAS
              (essatur.com.co). Al navegar en este sitio, usted acepta las condiciones aquí descritas.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">1. Objeto del sitio</h2>
            <p>
              Este sitio web tiene como finalidad presentar los servicios de transporte especial que
              ofrece ESSATUR SAS, así como permitir el contacto comercial con la empresa a través del
              formulario dispuesto para ello.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">2. Propiedad intelectual</h2>
            <p>
              El contenido de este sitio (textos, imágenes, logotipos y diseño) es propiedad de ESSATUR
              SAS o se usa bajo la debida autorización. Queda prohibida su reproducción total o parcial
              sin autorización previa y expresa.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">3. Uso permitido</h2>
            <p>
              El usuario se compromete a utilizar este sitio web de forma lícita, sin realizar conductas
              que puedan dañar, inutilizar o sobrecargar el sitio, ni que impidan su uso normal por parte
              de otros visitantes.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">4. Exactitud de la información</h2>
            <p>
              ESSATUR SAS procura mantener la información de este sitio actualizada, pero no garantiza
              la exactitud absoluta ni la ausencia de errores. La información aquí publicada no constituye
              una oferta comercial vinculante; las condiciones específicas de cada servicio se acuerdan
              directamente con el cliente.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">5. Enlaces externos</h2>
            <p>
              Este sitio puede contener enlaces a plataformas de terceros (como WhatsApp). ESSATUR SAS
              no se hace responsable del contenido o las políticas de privacidad de sitios externos.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">6. Modificaciones</h2>
            <p>
              ESSATUR SAS se reserva el derecho de modificar estos términos en cualquier momento. Los
              cambios serán publicados en esta misma página.
            </p>
            <h2 className="text-ink font-bold text-xl mt-8">7. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Para el tratamiento de
              datos personales, aplica adicionalmente nuestra{" "}
              <a href="/politica-de-datos" className="text-route underline">
                Política de tratamiento de datos personales
              </a>.
            </p>
            <p className="text-sm text-slate-400 pt-6 border-t border-slate-200 mt-8">
              Última actualización: [pendiente de fecha de publicación].
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Terminos;