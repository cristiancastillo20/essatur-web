import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "", acepta: false });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contacto", ...form }),
    })
      .then(() => setStatus("sent"))
      .catch(() => setStatus("error"));
  };

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <section className="bg-white min-h-screen pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-route font-bold text-sm tracking-wider uppercase">Contacto</span>
            <h1 className="text-ink text-3xl md:text-4xl font-extrabold mt-2">Escríbenos</h1>
            <p className="text-slate-500 mt-3">Te responderemos a la brevedad.</p>
          </motion.div>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-route/5 border border-route/20 rounded-xl p-8 text-center"
            >
              <p className="text-ink font-bold text-lg">¡Gracias por escribirnos!</p>
              <p className="text-slate-500 mt-2">Hemos recibido tu mensaje y te contactaremos pronto.</p>
            </motion.div>
          ) : (
            // name="contacto" debe coincidir EXACTAMENTE con el formulario estático
            // oculto en index.html (necesario para que Netlify lo detecte al hacer build).
            <form
              name="contacto"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-route"
                  placeholder="Ej: Laura Gómez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  required
                  value={form.correo}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-route"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-route"
                  placeholder="Cuéntanos qué necesitas..."
                />
              </div>

              {/* Casilla obligatoria de Habeas Data (RNF-15 / sección legal del proyecto) */}
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="acepta"
                  required
                  checked={form.acepta}
                  onChange={handleChange}
                  className="mt-1 accent-route"
                />
                <span>
                  Acepto la{" "}
                  <a href="/politica-de-datos" className="text-route underline">
                    Política de tratamiento de datos personales
                  </a>{" "}
                  de ESSATUR.
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-route text-white font-bold py-3 rounded-lg hover:brightness-110 transition disabled:opacity-60"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}
            </form>
          )}

          {/* Datos de contacto directo, tomados del portafolio oficial */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-slate-600">
            <div>
              <p className="font-bold text-ink mb-1">Cartagena</p>
              <p>Calle 14 Carrera 31b Lote 16</p>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">Bogotá</p>
              <p>Calle 133 N° 104-33</p>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">Teléfono</p>
              <a href="tel:+573138903491" className="hover:text-route transition-colors">(+57) 313 890 3491</a>
            </div>
            <div>
              <p className="font-bold text-ink mb-1">Correo</p>
              <a href="mailto:gerencia@essatur.com.co" className="hover:text-route transition-colors">gerencia@essatur.com.co</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;