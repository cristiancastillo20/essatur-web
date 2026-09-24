import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import colombia from "@svg-maps/colombia";

const coveredIds = [
  "dc", "ant", "atl", "bol", "boy", "cal", "caq", "vac", "cau", "ces",
  "cor", "cun", "hui", "mag", "met", "nsa", "put", "qui", "ris", "san",
  "suc", "tol",
];

const nameOverrides = {
  dc: "Bogotá, D.C.",
  vac: "Valle del Cauca",
  nsa: "Norte de Santander",
};

function Cobertura() {
  const [hovered, setHovered] = useState(null);

  const hoveredLocation = colombia.locations.find((l) => l.id === hovered);
  const hoveredName = hoveredLocation
    ? nameOverrides[hoveredLocation.id] || hoveredLocation.name
    : null;
  const hoveredCovered = hovered ? coveredIds.includes(hovered) : false;

  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-route text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
          Presencia nacional
        </span>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-3">
          Cobertura en Colombia
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mt-4">
          Operamos en más de 20 departamentos del país, llevando nuestro
          servicio a donde tu empresa lo necesite.
        </p>

        <div className="relative mt-12 max-w-xl mx-auto">
          <svg
            viewBox={colombia.viewBox}
            className="w-full h-auto"
            role="img"
            aria-label="Mapa de cobertura de ESSATUR en Colombia"
          >
            {colombia.locations.map((loc) => {
              const covered = coveredIds.includes(loc.id);
              return (
                <motion.path
                  key={loc.id}
                  d={loc.path}
                  strokeWidth={0.6}
                  onMouseEnter={() => setHovered(loc.id)}
                  onMouseLeave={() => setHovered(null)}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`stroke-white/10 transition-colors duration-200 cursor-pointer ${
                    covered
                      ? "fill-route hover:fill-sky"
                      : "fill-white/10 hover:fill-white/20"
                  }`}
                />
              );
            })}
          </svg>

          <div className="h-8 flex items-center justify-center mt-4">
            {hoveredName && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-white font-semibold text-sm bg-white/10 px-4 py-1.5 rounded-full"
              >
                <MapPin
                  size={14}
                  className={hoveredCovered ? "text-sky" : "text-white/40"}
                />
                {hoveredName}
                {!hoveredCovered && (
                  <span className="text-white/40 font-normal">
                    · próximamente
                  </span>
                )}
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-route inline-block" />
            Con cobertura
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-white/10 inline-block" />
            Próximamente
          </span>
        </div>
      </div>
    </section>
  );
}

export default Cobertura;