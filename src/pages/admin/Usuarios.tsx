import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Usuarios() {
  const columns = [
    { header: "ID", accessor: "id" as const },
    { header: "Usuario", accessor: "name" as const },
    { header: "Rol", accessor: "role" as const },
    { header: "Último Acceso", accessor: "lastLogin" as const },
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
    { id: "USR-001", name: "Admin Principal", role: "Super Admin", lastLogin: "Hoy, 10:45 AM", status: "Activo" },
    { id: "USR-002", name: "Soporte N1", role: "Técnico", lastLogin: "Hoy, 08:30 AM", status: "Activo" },
    { id: "USR-003", name: "Ventas Corp", role: "Vendedor", lastLogin: "Ayer, 16:20 PM", status: "Inactivo" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Gestión de Usuarios" 
        description="Administración de cuentas del sistema y permisos."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nuevo Usuario</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar usuario..." />
    </div>
  );
}
