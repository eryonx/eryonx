import { AdminPageHeader } from "../../components/admin/AdminPageHeader";
import { DataTable } from "../../components/admin/DataTable";
import { Plus } from "lucide-react";

export function Productos() {
  const columns = [
    { header: "SKU", accessor: "id" as const },
    { header: "Producto", accessor: "name" as const },
    { header: "Categoría", accessor: "category" as const },
    { header: "Stock", accessor: "stock" as const },
    { header: "Precio", accessor: "price" as const },
    { 
      header: "Estado", 
      accessor: "status" as const,
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'En Stock' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
        }`}>
          {status}
        </span>
      )
    },
  ];

  const data = [
    { id: "PRD-101", name: "Router Cisco ISR 4000", category: "Redes", stock: 15, price: "$850.00", status: "En Stock" },
    { id: "PRD-102", name: "Cámara Hikvision 4MP", category: "Seguridad", stock: 0, price: "$120.00", status: "Agotado" },
    { id: "PRD-103", name: "Switch Ubiquiti 24P", category: "Redes", stock: 5, price: "$350.00", status: "En Stock" },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <AdminPageHeader 
        title="Inventario de Productos" 
        description="Gestión de hardware, equipos y stock."
        action={
          <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <Plus className="w-4 h-4" />
            <span>Nuevo Producto</span>
          </button>
        }
      />
      <DataTable columns={columns} data={data} searchPlaceholder="Buscar producto o SKU..." />
    </div>
  );
}
