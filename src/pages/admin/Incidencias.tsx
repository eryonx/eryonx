import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Incidencias() {
  const columns = [
    { header: "Ticket", accessor: "id" as const },
    { header: "Cliente", accessor: "client" as const },
    { header: "Asunto", accessor: "subject" as const },
    { 
      header: "Prioridad", 
      accessor: "priority" as const,
      render: (priority: string) => {
        let color = "bg-white/10 text-white/60";
        if (priority === 'Alta') color = "bg-red-500/20 text-red-400";
        if (priority === 'Media') color = "bg-yellow-500/20 text-yellow-400";
        if (priority === 'Baja') color = "bg-blue-500/20 text-blue-400";
        
        return <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>{priority}</span>;
      }
    },
    { 
      header: "Estado", 
      accessor: "status" as const,
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Resuelto' ? 'bg-emerald-500/20 text-emerald-400' : 
          status === 'En progreso' ? 'bg-accent/20 text-accent' :
          'bg-white/10 text-white/60'
        }`}>
          {status}
        </span>
      )
    },
  ];

  const data = [
    { id: "TK-1042", client: "TechCorp Inc.", subject: "Servidor caído", priority: "Alta", status: "En progreso" },
    { id: "TK-1043", client: "Global Solutions", subject: "Renovación SSL", priority: "Media", status: "Abierto" },
    { id: "TK-1044", client: "Industrias Nexo", subject: "Consulta sobre facturación", priority: "Baja", status: "Resuelto" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Centro de Incidencias" 
        description="Gestión de tickets y soporte técnico."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nuevo Ticket</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar ticket, cliente o asunto..." />
    </div>
  );
}
