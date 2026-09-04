import { motion } from "framer-motion";
import Hero3D from "../components/Hero3D";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

// La etiqueta pequeña sube desde abajo (como pediste: "de abajo a arriba")
const fromBottom = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// El titular baja desde arriba, como si "cayera" desde la navbar
const fromTop = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  return (
    <section className="relative bg-linear-to-br from-ink via-route to-[#4C7DFF] min-h-screen flex items-center overflow-hidden pt-20">
      <Hero3D />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto px-6 lg:pr-32 text-center"
      >
        <motion.span
          variants={fromTop}
          className="inline-block text-sky text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
        >
          TRANSPORTE Y LOGÍSTICA
        </motion.span>

        <motion.h1
          variants={fromBottom}
          className="text-white text-4xl md:text-5xl font-extrabold mt-3 leading-tight"
        >
          Soluciones de transporte para tu empresa, en un solo lugar.
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default Hero;