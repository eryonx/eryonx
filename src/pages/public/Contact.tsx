import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-xl text-white/60">
            ¿Listo para llevar tu infraestructura TI al siguiente nivel? Escríbenos y un especialista te asesorará.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Phone className="text-primary-light mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Llámanos</h3>
                <p className="text-white/60 mb-2">+51 987 654 321</p>
                <p className="text-white/60">+51 1 234 5678</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Mail className="text-primary-light mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Correo Electrónico</h3>
                <p className="text-white/60 mb-2">contacto@eryon-x.com</p>
                <p className="text-white/60">soporte@eryon-x.com</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <MapPin className="text-accent shrink-0" size={28} />
              <div>
                <h3 className="font-bold text-lg mb-2">Sede Principal</h3>
                <p className="text-white/60">Av. Tecnológica 123, Piso 4<br/>Centro Empresarial San Isidro<br/>Lima, Perú</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 rounded-2xl bg-dark-surface border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 bg-primary rounded-lg font-medium text-sm">Abrir en Google Maps</span>
              </div>
              {/* Replace with actual iframe in prod */}
              <div className="w-full h-full bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-12.046374,-77.042793&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7C-12.046374,-77.042793&key=YOUR_API_KEY')] bg-cover bg-center opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-surface border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold mb-8 relative z-10">Solicitar Cotización</h2>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Nombre Completo</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Empresa (Opcional)</label>
                  <input type="text" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Teléfono</label>
                  <input type="tel" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Servicio de Interés</label>
                  <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors text-white">
                    <option>Cableado Estructurado</option>
                    <option>Soporte Técnico</option>
                    <option>Cámaras de Seguridad</option>
                    <option>Licencias de Software</option>
                    <option>Otros</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Mensaje</label>
                <textarea rows={4} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 py-4 rounded-lg bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Enviar Mensaje
                </button>
                <button type="button" className="flex-1 py-4 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-all flex items-center justify-center gap-2 accent-glow">
                  <MessageCircle size={18} /> Escribir al WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
