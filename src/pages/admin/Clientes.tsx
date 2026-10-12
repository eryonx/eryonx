import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Clientes() {
  const columns = [
    { header: "ID", accessor: "id" as const },
    { header: "Empresa", accessor: "company" as const },
    { header: "Contacto", accessor: "contact" as const },
    { header: "Email", accessor: "email" as const },
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
    { id: "CL-001", company: "TechCorp Inc.", contact: "Carlos Mendoza", email: "carlos@techcorp.com", status: "Activo" },
    { id: "CL-002", company: "Global Solutions", contact: "Ana Silva", email: "asilva@globals.com", status: "Inactivo" },
    { id: "CL-003", company: "Industrias Nexo", contact: "Roberto Torres", email: "rtorres@nexo.pe", status: "Activo" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Gestión de Clientes" 
        description="Administra los clientes corporativos y sus datos de contacto."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nuevo Cliente</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar empresa, contacto o ID..." />
    </div>
  );
}
