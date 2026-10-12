import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Network, ShieldCheck, Wrench, MonitorSmartphone, Key, Cloud, Database, Wifi, SearchCode } from "lucide-react";
import cableadoImg from "../../assets/services/cableado_estructurado.webp";
import camarasImg from "../../assets/services/camaras_seguridad.webp";
import soporteImg from "../../assets/services/soporte_tecnico.webp";
import redesImg from "../../assets/services/redes_conectividad.webp";
import reparacionImg from "../../assets/services/reparacion_equipos.webp";
import licenciasImg from "../../assets/services/licencias_software.webp";
import seguridadImg from "../../assets/services/seguridad_informatica.webp";
import desarrolloImg from "../../assets/services/desarrollo_web.webp";
import hostingImg from "../../assets/services/hosting_dominios.webp";

export const Services = () => {
  const services = [
    { 
      icon: <Network size={24} />, 
      image: cableadoImg,
      title: "Cableado Estructurado", 
      desc: "Diseño e implementación de redes LAN/WAN de alto rendimiento corporativo." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      image: camarasImg,
      title: "Cámaras de Seguridad", 
      desc: "Sistemas CCTV y videovigilancia IP con acceso remoto 24/7." 
    },
    { 
      icon: <Wrench size={24} />, 
      image: soporteImg,
      title: "Soporte Técnico", 
      desc: "Asistencia presencial y remota para equipos y servidores empresariales." 
    },
    { 
      icon: <Wifi size={24} />, 
      image: redesImg,
      title: "Redes y Conectividad", 
      desc: "Soluciones de networking, firewalls y optimización de ancho de banda." 
    },
    { 
      icon: <MonitorSmartphone size={24} />, 
      image: reparacionImg,
      title: "Reparación de Equipos", 
      desc: "Mantenimiento preventivo y correctivo de computadoras y hardware." 
    },
    { 
      icon: <Key size={24} />, 
      image: licenciasImg,
      title: "Licencias de Software", 
      desc: "Venta e implementación de software original (Microsoft, Antivirus)." 
    },
    { 
      icon: <SearchCode size={24} />, 
      image: seguridadImg,
      title: "Seguridad Informática", 
      desc: "Auditorías, respaldos automatizados y protección contra ransomware." 
    },
    { 
      icon: <Database size={24} />, 
      image: desarrolloImg,
      title: "Desarrollo Web", 
      desc: "Sistemas personalizados y plataformas web escalables." 
    },
    { 
      icon: <Cloud size={24} />, 
      image: hostingImg,
      title: "Hosting y Dominios", 
      desc: "Alojamiento web VPS y correo corporativo de alta disponibilidad." 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with Video Background */}
      <section className="relative pt-32 pb-16 overflow-hidden flex items-center justify-center min-h-[40vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/20 to-background z-10"></div>
          {/* Using a placeholder tech video, in production replace with local asset */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1055-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Servicios</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Soluciones tecnológicas integrales diseñadas para potenciar y proteger la infraestructura de tu negocio.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 relative bg-background">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all flex flex-col h-full overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent z-10"></div>
                  <img src={service.image} alt={service.title} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 z-20 p-3 rounded-xl bg-primary/20 backdrop-blur-md border border-white/10 text-primary-light">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 pt-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-3">{service.title}</h2>
                  <p className="text-white/80 mb-8 flex-1">{service.desc}</p>
                  <Link to="/contacto" className="mt-auto px-4 py-2 w-full text-center rounded-lg bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-colors font-medium">
                    Cotizar Servicio
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
