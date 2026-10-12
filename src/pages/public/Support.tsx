import { motion } from "framer-motion";
import { LifeBuoy, FileText, MessageSquare, Clock } from "lucide-react";

export const Support = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary-light mb-6">
            <LifeBuoy size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portal de <span className="text-primary-light text-glow">Soporte</span></h1>
          <p className="text-xl text-white/60">
            Estamos aquí para ayudarte. Registra un ticket o revisa la base de conocimientos.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <FileText size={24} />, title: "Base de Conocimientos", desc: "Tutoriales y guías de uso comunes." },
            { icon: <MessageSquare size={24} />, title: "Chat en Vivo", desc: "Habla con un asesor directamente." },
            { icon: <Clock size={24} />, title: "Estado del Sistema", desc: "Todos los sistemas operando al 100%." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-dark-surface border border-white/5 text-primary-light">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticket Form */}
        <div className="max-w-2xl mx-auto bg-dark-surface border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold mb-6">Abrir un Ticket</h2>
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Nombre o Empresa</label>
                <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Tu nombre..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Correo Electrónico</label>
                <input type="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="correo@empresa.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Servicio Afectado / Categoría</label>
              <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white">
                <option value="redes">Redes e Internet</option>
                <option value="equipos">Reparación de Equipos</option>
                <option value="licencias">Problemas con Licencias</option>
                <option value="camaras">Cámaras de Seguridad</option>
                <option value="otros">Otros</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Descripción del Problema</label>
              <textarea rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Describe detalladamente tu incidencia..."></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:bg-primary-light transition-all box-glow">
              Enviar Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
