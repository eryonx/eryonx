import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Licencias() {
  const columns = [
    { header: "Licencia", accessor: "id" as const },
    { header: "Software", accessor: "software" as const },
    { header: "Cliente", accessor: "client" as const },
    { header: "Expiración", accessor: "expiry" as const },
    { 
      header: "Estado", 
      accessor: "status" as const,
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Activa' ? 'bg-emerald-500/20 text-emerald-400' : 
          status === 'Por expirar' ? 'bg-yellow-500/20 text-yellow-400' :
          'bg-red-500/20 text-red-400'
        }`}>
          {status}
        </span>
      )
    },
  ];

  const data = [
    { id: "LIC-0089", software: "Microsoft 365 Business", client: "TechCorp Inc.", expiry: "15/12/2026", status: "Activa" },
    { id: "LIC-0090", software: "Kaspersky Endpoint", client: "Global Solutions", expiry: "20/05/2026", status: "Por expirar" },
    { id: "LIC-0091", software: "Adobe Creative Cloud", client: "Industrias Nexo", expiry: "01/01/2026", status: "Expirada" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Licencias de Software" 
        description="Control de licencias y fechas de expiración."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Registrar Licencia</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar licencia o cliente..." />
    </div>
  );
}
