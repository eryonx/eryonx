import { Users, Server, AlertCircle, TrendingUp, DollarSign } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Ene", revenue: 4000, incidents: 24 },
  { name: "Feb", revenue: 3000, incidents: 13 },
  { name: "Mar", revenue: 2000, incidents: 38 },
  { name: "Abr", revenue: 2780, incidents: 39 },
  { name: "May", revenue: 1890, incidents: 48 },
  { name: "Jun", revenue: 2390, incidents: 38 },
  { name: "Jul", revenue: 3490, incidents: 43 },
];

export function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Ejecutivo</h1>
          <p className="text-white/60 text-sm mt-1">Visión general del estado de la empresa.</p>
        </div>
        <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]">
          <TrendingUp className="w-4 h-4" />
          <span>Generar Reporte</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/60 text-sm font-medium">Ingresos Totales</p>
              <h3 className="text-3xl font-bold text-white mt-2">$24,500</h3>
            </div>
            <div className="p-3 bg-accent/20 text-accent rounded-lg">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-400 font-medium">+12.5%</span>
            <span className="text-white/40 ml-2">vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/60 text-sm font-medium">Clientes Activos</p>
              <h3 className="text-3xl font-bold text-white mt-2">1,240</h3>
            </div>
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-400 font-medium">+5.2%</span>
            <span className="text-white/40 ml-2">vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/60 text-sm font-medium">Servicios Activos</p>
              <h3 className="text-3xl font-bold text-white mt-2">342</h3>
            </div>
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-lg">
              <Server className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-emerald-400 font-medium">+18.1%</span>
            <span className="text-white/40 ml-2">vs mes anterior</span>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-white/60 text-sm font-medium">Incidencias Pendientes</p>
              <h3 className="text-3xl font-bold text-white mt-2">12</h3>
            </div>
            <div className="p-3 bg-red-500/20 text-red-400 rounded-lg">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-400 font-medium">-2.4%</span>
            <span className="text-white/40 ml-2">vs mes anterior</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-6">Rendimiento Financiero</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#ffffff20', color: '#fff', borderRadius: '8px' }}
                  itemStyle={{ color: '#F97316' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#F97316" fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-6">Actividad Reciente</h3>
          <div className="space-y-6">
            {[
              { title: "Nuevo cliente registrado", time: "Hace 2 horas", type: "user" },
              { title: "Servicio de mantenimiento completado", time: "Hace 4 horas", type: "service" },
              { title: "Alerta de servidor: CPU alta", time: "Hace 5 horas", type: "alert" },
              { title: "Cotización #4582 aprobada", time: "Hace 1 día", type: "finance" },
              { title: "Actualización de sistema", time: "Hace 2 días", type: "system" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="relative mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent relative z-10 shadow-[0_0_8px_#F97316]"></div>
                  {i !== 4 && <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10"></div>}
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90">{item.title}</p>
                  <p className="text-xs text-white/40 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
