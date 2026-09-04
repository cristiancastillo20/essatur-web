import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

function Nosotros() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-route font-bold text-sm tracking-wider uppercase">Quiénes somos</span>
          <h2 className="text-ink text-3xl md:text-4xl font-extrabold mt-2">Nosotros</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Ofrecemos un servicio con altos estándares de calidad, incorporando innovación tecnológica.
            Somos una empresa que funciona para su empresa, por eso más que clientes somos sus aliados
            estratégicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 rounded-xl p-8 border border-slate-200"
          >
            <div className="w-12 h-12 rounded-lg bg-route/10 flex items-center justify-center mb-4">
              <Target className="text-route" size={24} strokeWidth={2} />
            </div>
            <h3 className="text-ink font-bold text-xl mb-3">Misión</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Diseñar y ejecutar el mejor servicio de transporte especial, cumpliendo siempre con satisfacer
              las necesidades de nuestros clientes, ofreciendo servicios que generen comodidad, seguridad y
              bienestar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-slate-50 rounded-xl p-8 border border-slate-200"
          >
            <div className="w-12 h-12 rounded-lg bg-route/10 flex items-center justify-center mb-4">
              <Eye className="text-route" size={24} strokeWidth={2} />
            </div>
            <h3 className="text-ink font-bold text-xl mb-3">Visión</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ser la empresa de transporte de servicio especial más confiable y reconocida en el mercado,
              satisfaciendo siempre las expectativas de nuestros clientes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;