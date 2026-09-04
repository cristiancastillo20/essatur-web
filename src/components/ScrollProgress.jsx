import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  { id: "hero", label: "01", name: "Inicio", dark: true },
  { id: "nosotros", label: "02", name: "Nosotros", dark: false },
  { id: "servicios", label: "03", name: "Servicios", dark: false },
  { id: "cobertura", label: "04", name: "Cobertura", dark: true },
];

function ScrollProgress() {
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      // Para cada sección, medimos qué tan lejos está su borde superior
      // de una línea de referencia (100px desde arriba de la pantalla).
      const distances = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top - 100);
      });
      // La sección "activa" es la que tiene la menor distancia a esa línea.
      const closestIndex = distances.indexOf(Math.min(...distances));
      setActive(closestIndex);
    };

    handleScroll(); // calcular el estado inicial al cargar
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = sections[active].dark;

  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start gap-10">
      <div
        className={`absolute left-[3px] top-0 bottom-0 w-px transition-colors duration-500 ${
          isDark ? "bg-white/25" : "bg-slate-300"
        }`}
      />
      <motion.div
        className={`absolute left-[3px] top-0 w-px h-full origin-top transition-colors duration-500 ${
          isDark ? "bg-white" : "bg-black"
        }`}
        style={{ scaleY }}
      />

      {sections.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className="relative z-10 flex items-center gap-3 pl-3">
          <span
            className={`font-mono transition-colors duration-500 ${
              active === i
                ? `font-bold text-sm ${isDark ? "text-white" : "text-black"}`
                : `text-xs ${isDark ? "text-white/40" : "text-slate-400"}`
            }`}
          >
            {s.label}
          </span>
          {active === i && (
            <span
              className={`font-mono font-bold text-sm uppercase tracking-wide whitespace-nowrap transition-colors duration-500 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {s.name}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

export default ScrollProgress;