import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const departamentos = [
  "Bogotá, D.C.", "Antioquia", "Atlántico", "Bolívar", "Boyacá", "Caldas",
  "Caquetá", "Valle del Cauca", "Cauca", "Cesar", "Córdoba", "Cundinamarca",
  "Huila", "Magdalena", "Meta", "Norte de Santander", "Putumayo", "Quindío",
  "Risaralda", "Santander", "Sucre", "Tolima",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Cobertura() {
  return (
    <section className="bg-ink py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sky font-bold text-sm tracking-wider uppercase">Presencia nacional</span>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-2">Cobertura en Colombia</h2>
          <p className="text-slate-300 mt-3 max-w-xl mx-auto">
            Operamos en más de 20 departamentos del país, llevando nuestro servicio a donde tu empresa lo necesite.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {departamentos.map((dep) => (
            <motion.span
              key={dep}
              variants={item}
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-200 text-sm px-4 py-2 rounded-full"
            >
              <MapPin size={14} className="text-sky" />
              {dep}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Cobertura;