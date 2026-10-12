import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import isotipo from "../assets/isotipo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark-surface pt-16 pb-8 relative overflow-hidden">
      {/* Footer Glow Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={isotipo} alt="ERYON-X Logo" width={150} height={32} loading="lazy" className="h-8 w-auto group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
              <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-glow transition-all">
                ERYON-X
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Transformando negocios mediante infraestructura TI moderna, seguridad informática y servicios gestionados de primer nivel.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-primary-light transition-all font-bold text-xs">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-primary-light transition-all font-bold text-xs">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-primary-light transition-all font-bold text-xs">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Soluciones</h4>
            <Link to="/servicios" className="text-white/60 hover:text-primary-light transition-colors text-sm">Cableado Estructurado</Link>
            <Link to="/servicios" className="text-white/60 hover:text-primary-light transition-colors text-sm">Ciberseguridad</Link>
            <Link to="/servicios" className="text-white/60 hover:text-primary-light transition-colors text-sm">Soporte Técnico TI</Link>
            <Link to="/servicios" className="text-white/60 hover:text-primary-light transition-colors text-sm">Servidores y Cloud</Link>
            <Link to="/catalogo" className="text-white/60 hover:text-primary-light transition-colors text-sm">Licencias de Software</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Empresa</h4>
            <Link to="/nosotros" className="text-white/60 hover:text-primary-light transition-colors text-sm">Nosotros</Link>
            <Link to="/catalogo" className="text-white/60 hover:text-primary-light transition-colors text-sm">Catálogo de Productos</Link>
            <Link to="/soporte" className="text-white/60 hover:text-primary-light transition-colors text-sm">Portal de Soporte</Link>
            <Link to="/contacto" className="text-white/60 hover:text-primary-light transition-colors text-sm">Contacto</Link>
            <Link to="/admin" className="text-white/60 hover:text-primary-light transition-colors text-sm">Acceso Clientes</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Contacto</h4>
            <div className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={18} className="text-primary-light shrink-0 mt-0.5" />
              <p>Av. Tecnológica 123, Piso 4<br/>Centro Empresarial</p>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={18} className="text-primary-light shrink-0" />
              <p>+51 987 654 321</p>
            </div>
            <div className="flex items-center gap-3 text-white/60 text-sm">
              <Mail size={18} className="text-primary-light shrink-0" />
              <p>contacto@eryon-x.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} ERYON-X. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
