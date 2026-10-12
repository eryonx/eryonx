import { Outlet, Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Server, 
  AlertTriangle, 
  FileText, 
  Key, 
  Package, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";

import isotipo from "../assets/isotipo.png";

export default function AdminLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Clientes", path: "/admin/clientes", icon: Users },
    { name: "Servicios", path: "/admin/servicios", icon: Server },
    { name: "Incidencias", path: "/admin/incidencias", icon: AlertTriangle },
    { name: "Cotizaciones", path: "/admin/cotizaciones", icon: FileText },
    { name: "Licencias", path: "/admin/licencias", icon: Key },
    { name: "Productos", path: "/admin/productos", icon: Package },
    { name: "Usuarios", path: "/admin/usuarios", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#0A0F1C] text-foreground font-sans selection:bg-accent/30 selection:text-white">
      {/* Sidebar */}
      <aside 
        className={`${isSidebarOpen ? "w-64" : "w-20"} transition-all duration-300 border-r border-white/5 bg-black/40 backdrop-blur-xl h-screen sticky top-0 flex flex-col z-20`}
      >
        <div className={`h-16 flex items-center border-b border-white/5 relative ${isSidebarOpen ? 'px-4 justify-between' : 'justify-center'}`}>
          {isSidebarOpen ? (
            <div className="flex items-center gap-3 group cursor-pointer flex-shrink-0">
              <img src={isotipo} alt="ERYON-X" width={150} height={28} loading="eager" className="h-7 w-auto flex-shrink-0 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)] transition-all duration-300" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tighter text-white group-hover:text-glow transition-all leading-tight">ERYON-X</span>
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest leading-tight">Admin</span>
              </div>
            </div>
          ) : (
            <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all cursor-pointer group shadow-lg flex-shrink-0">
              <img src={isotipo} alt="E" width={24} height={24} loading="eager" className="h-6 w-auto min-w-[24px] object-contain flex-shrink-0 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)] transition-all duration-300" />
            </div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`p-1 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white hidden md:flex items-center justify-center ${!isSidebarOpen ? 'absolute -right-3 top-1/2 -translate-y-1/2 bg-[#0A0F1C] border border-white/20 shadow-lg z-50 w-6 h-6' : ''}`}
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${!isSidebarOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2 custom-scrollbar">
          <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-2 px-3">
            {isSidebarOpen ? "Módulos" : "..."}
          </div>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname === "/admin" && item.path === "/admin/dashboard");
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative overflow-hidden ${
                  isActive 
                    ? "text-white bg-accent/10 border border-accent/20 shadow-[inset_0_0_20px_rgba(249,115,22,0.1)]" 
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
                title={!isSidebarOpen ? item.name : ""}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-md shadow-[0_0_10px_#F97316]"></div>}
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-accent" : "group-hover:text-white/90"}`} />
                {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition-colors"
            title={!isSidebarOpen ? "Volver a Web" : ""}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="text-sm font-medium">Volver a Web</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-black/20 backdrop-blur-md flex items-center justify-between px-6 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/70 hover:text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Buscar en el sistema..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border border-[#0A0F1C]"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">Admin Sys</p>
                <p className="text-xs text-white/40">Superadmin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                AS
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 z-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
