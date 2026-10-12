import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Servicios() {
  const columns = [
    { header: "ID", accessor: "id" as const },
    { header: "Nombre del Servicio", accessor: "name" as const },
    { header: "Categoría", accessor: "category" as const },
    { header: "Precio Base", accessor: "price" as const },
    { 
      header: "Estado", 
      accessor: "status" as const,
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Activo' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/60'
        }`}>
          {status}
        </span>
      )
    },
  ];

  const data = [
    { id: "SRV-001", name: "Cableado Estructurado CAT6", category: "Infraestructura", price: "$45.00/punto", status: "Activo" },
    { id: "SRV-002", name: "Instalación Cámaras IP", category: "Seguridad", price: "$120.00", status: "Activo" },
    { id: "SRV-003", name: "Mantenimiento Preventivo PC", category: "Soporte", price: "$35.00", status: "Inactivo" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Catálogo de Servicios" 
        description="Gestiona los servicios ofrecidos por la empresa."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nuevo Servicio</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar servicio..." />
    </div>
  );
}
