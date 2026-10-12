import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Server, Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-light mb-8"
            >
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-medium tracking-wide">EL FUTURO DE LA INFRAESTRUCTURA TI</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              Soluciones Tecnológicas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">
                Empresariales
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Optimizamos, aseguramos y escalamos tu negocio con infraestructura tecnológica de primer nivel. Confiabilidad absoluta para empresas que miran hacia el futuro.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/servicios" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all box-glow flex items-center justify-center gap-2">
                Explorar Servicios <ArrowRight size={20} />
              </Link>
              <Link to="/contacto" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center">
                Solicitar Cotización
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Background Video (Pexels) */}
        <div className="absolute inset-0 z-0">
          {/* Overlay gradiente para mantener enfoque en el título */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/40 to-[#0f172a] z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 mix-blend-screen"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.9%", label: "Uptime Garantizado" },
              { value: "24/7", label: "Soporte Técnico" },
              { value: "500+", label: "Empresas Confiando" },
              { value: "10+", label: "Años de Experiencia" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center"
              >
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 relative z-10 bg-dark-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Proveemos soluciones integrales para modernizar la infraestructura tecnológica de tu empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Server size={32} />, title: "Infraestructura y Redes", desc: "Cableado estructurado, configuración de servidores y conectividad empresarial." },
              { icon: <ShieldCheck size={32} />, title: "Ciberseguridad", desc: "Protección de datos, antivirus corporativo y auditorías de seguridad." },
              { icon: <Monitor size={32} />, title: "Soporte TI", desc: "Mantenimiento preventivo, reparación de equipos y asistencia remota." },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 rounded-full blur-[40px] group-hover:bg-primary/40 transition-colors"></div>
                <div className="text-primary-light mb-6 relative z-10">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-white/80 mb-6 relative z-10">{service.desc}</p>
                <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors relative z-10">
                  Saber más <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/servicios" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-medium">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
