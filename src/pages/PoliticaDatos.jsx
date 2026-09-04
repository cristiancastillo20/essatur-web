import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function PoliticaDatos() {
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
            Política de tratamiento de datos personales
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
            <p>
              En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios sobre Protección de Datos
              Personales en Colombia, ESSATUR informa a los usuarios de este sitio web la presente Política de
              Tratamiento de Datos Personales.
            </p>

            <h2 className="text-ink font-bold text-xl mt-8">1. Responsable del tratamiento</h2>
            {/* TODO: confirmar el NIT exacto con la jefa */}
            <p>
              ESSATUR SAS, con domicilio en Bogotá y Cartagena (Colombia), identificada con NIT [pendiente
              de confirmar], es responsable del tratamiento de los datos personales recolectados a través
              de este sitio web.
            </p>

            <h2 className="text-ink font-bold text-xl mt-8">2. Datos que recolectamos</h2>
            <p>
              A través del formulario de contacto, recolectamos el nombre completo, correo electrónico y el
              contenido del mensaje que el usuario decida compartir voluntariamente.
            </p>

            <h2 className="text-ink font-bold text-xl mt-8">3. Finalidad del tratamiento</h2>
            <p>
              Los datos recolectados se usan exclusivamente para responder las solicitudes de información
              comercial enviadas a través del formulario de contacto. No se comparten con terceros ni se
              utilizan para fines distintos a este.
            </p>

            <h2 className="text-ink font-bold text-xl mt-8">4. Derechos del titular</h2>
            <p>Como titular de los datos, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio.</li>
              <li>Revocar la autorización y/o solicitar la supresión de sus datos.</li>
            </ul>

            <h2 className="text-ink font-bold text-xl mt-8">5. Cómo ejercer estos derechos</h2>
            <p>
              Puede ejercer sus derechos escribiendo a{" "}
              <a href="mailto:gerencia@essatur.com.co" className="text-route underline">
                gerencia@essatur.com.co
              </a>{" "}
              o a través de nuestro formulario de contacto.
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

export default PoliticaDatos;