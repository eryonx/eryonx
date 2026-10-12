import { motion } from "framer-motion";
import { Target, Shield, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="relative py-24 bg-dark-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/about-hero.png" alt="ERYON-X Data Center" width={1920} height={1080} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-background/50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Sobre <span className="text-primary-light text-glow">ERYON-X</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/85 max-w-3xl mx-auto"
          >
            Somos el socio tecnológico estratégico que impulsa el crecimiento de tu empresa mediante infraestructura sólida y segura.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
              <Target size={40} className="text-primary-light mb-6" />
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-white/80 leading-relaxed">
                Brindar soluciones integrales en servicios informáticos e infraestructura TI que optimicen la productividad y garanticen la continuidad operativa de nuestros clientes corporativos, respaldados por la innovación constante y un soporte técnico de excelencia.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-[40px]"></div>
              <Shield size={40} className="text-accent mb-6" />
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-white/80 leading-relaxed">
                Posicionarnos como la empresa tecnológica líder a nivel nacional en infraestructura TI y seguridad informática, siendo reconocidos por nuestra confiabilidad, escalabilidad y compromiso con la modernización empresarial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-surface/50 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Filosofía y Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Innovación", desc: "Adaptación tecnológica constante" },
              { title: "Seguridad", desc: "Protección integral de datos" },
              { title: "Confianza", desc: "Transparencia corporativa" },
              { title: "Escalabilidad", desc: "Soluciones preparadas para el futuro" }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary-light" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{val.title}</h3>
                <p className="text-sm text-white/75">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
