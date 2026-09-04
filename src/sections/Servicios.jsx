import { motion } from "framer-motion";
import { HeartPulse, Building2, GraduationCap, Briefcase, Globe, Fuel } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Transporte sector salud", text: "Transportamos personal del sector de la salud, pacientes en condición de discapacidad y transporte médico domiciliario." },
  { icon: Building2, title: "Transporte empresarial", text: "En nuestra flota viajará lo más importante para tu empresa: el recurso humano, de manera cómoda y segura, optimizando tiempos y reduciendo costos." },
  { icon: GraduationCap, title: "Transporte escolar", text: "Transportamos lo más valioso de las familias: sus hijos. Para jardines, colegios y universidades." },
  { icon: Briefcase, title: "Transporte ejecutivo", text: "Vehículos de alta gama y conductores privados para ejecutivos, empresarios y turistas: puntualidad, confidencialidad y confort." },
  { icon: Globe, title: "Transporte turístico terrestre", text: "Te ofrecemos la posibilidad de reencontrarte con quienes más extrañas, con los más altos protocolos de servicio." },
  { icon: Fuel, title: "Sector de hidrocarburos", text: "Soluciones con altos estándares de seguridad, vehículos con seguimiento satelital y personal certificado." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Servicios() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-route font-bold text-sm tracking-wider uppercase">Servicios</span>
          <h2 className="text-ink text-3xl md:text-4xl font-extrabold mt-2">
            Soluciones de transporte para cada necesidad
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-route/40 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-route/10 flex items-center justify-center mb-4">
                <Icon className="text-route" size={24} strokeWidth={2} />
              </div>
              <h3 className="text-ink font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Servicios;