import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Box } from "lucide-react";

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Todos", "Licencias", "Hardware", "Redes", "Seguridad"];

  const products = [
    { id: 1, name: "Microsoft 365 Business Standard", category: "Licencias", desc: "Suscripción anual corporativa", price: "Cotizar" },
    { id: 2, name: "Antivirus ESET Endpoint", category: "Seguridad", desc: "Protección avanzada para servidores y PCs", price: "Cotizar" },
    { id: 3, name: "Switch Cisco Catalyst 2960", category: "Redes", desc: "Switch Gigabit 24 puertos administrable", price: "Cotizar" },
    { id: 4, name: "Servidor Dell PowerEdge", category: "Hardware", desc: "Servidor Rack 1U Intel Xeon", price: "Cotizar" },
    { id: 5, name: "Licencia Windows Server 2022", category: "Licencias", desc: "Licencia perpetua OEM", price: "Cotizar" },
    { id: 6, name: "Access Point Ubiquiti UniFi", category: "Redes", desc: "Punto de acceso WiFi 6 empresarial", price: "Cotizar" },
  ];

  const filteredProducts = products.filter(p => 
    (activeCategory === "Todos" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Catálogo de <span className="text-primary-light text-glow">Productos</span></h1>
          <p className="text-white/60 text-lg">Soluciones de software y hardware para equipar tu infraestructura.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white border border-primary" 
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-primary-light transition-colors"
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col group"
              >
                <div className="h-48 bg-dark-surface flex items-center justify-center border-b border-white/5 group-hover:bg-primary/5 transition-colors">
                  <Box size={48} className="text-white/20 group-hover:text-primary-light transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent mb-2 uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-white/50 text-sm mb-6 flex-1">{product.desc}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="font-semibold">{product.price}</span>
                    <button className="p-2 rounded-lg bg-primary/10 text-primary-light hover:bg-primary hover:text-white transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-white/50">
            No se encontraron productos que coincidan con tu búsqueda.
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
