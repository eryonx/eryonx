import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Cotizaciones() {
  const columns = [
    { header: "Cotización", accessor: "id" as const },
    { header: "Cliente", accessor: "client" as const },
    { header: "Fecha", accessor: "date" as const },
    { header: "Total", accessor: "total" as const },
    { 
      header: "Estado", 
      accessor: "status" as const,
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Aprobada' ? 'bg-emerald-500/20 text-emerald-400' : 
          status === 'Pendiente' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          {status}
        </span>
      )
    },
  ];

  const data = [
    { id: "COT-2023-001", client: "TechCorp Inc.", date: "15/05/2026", total: "$1,250.00", status: "Pendiente" },
    { id: "COT-2023-002", client: "Global Solutions", date: "10/05/2026", total: "$3,400.00", status: "Aprobada" },
    { id: "COT-2023-003", client: "Industrias Nexo", date: "02/05/2026", total: "$850.00", status: "Rechazada" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Cotizaciones" 
        description="Gestión de propuestas económicas para clientes."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nueva Cotización</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar cotización..." />
    </div>
  );
}
