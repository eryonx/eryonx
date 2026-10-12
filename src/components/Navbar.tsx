import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import isotipo from "../assets/isotipo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios" },
    { name: "Catálogo", path: "/catalogo" },
    { name: "Soporte", path: "/soporte" },
    { name: "Contacto", path: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_0_20px_rgba(30,58,138,0.2)]"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={isotipo} alt="ERYON-X Logo" width={150} height={32} loading="eager" className="h-8 w-auto group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
          <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-glow transition-all">
            ERYON-X
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-light ${location.pathname === link.path ? "text-primary-light" : "text-white/90"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/*<Link
            to="/admin"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Portal
          </Link>*/}
          <Link
            to="/contacto"
            className="px-5 py-2 text-sm font-semibold rounded-md bg-primary hover:bg-primary-light text-white transition-all box-glow"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-4 text-center font-medium border-b border-white/5 last:border-0 ${location.pathname === link.path
                      ? "text-primary-light"
                      : "text-white/90"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <Link
                  to="/admin"
                  className="py-3 text-center text-white/50 border border-white/10 rounded-md"
                >
                  Portal de Cliente
                </Link>
                <Link
                  to="/contacto"
                  className="py-3 text-center text-white font-semibold rounded-md bg-primary box-glow"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
