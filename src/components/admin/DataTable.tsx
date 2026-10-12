import type { ReactNode } from "react";
import { Search, Filter, MoreVertical } from "lucide-react";

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, item: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  searchPlaceholder = "Buscar registros...",
}: DataTableProps<T>) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
      {/* Table Toolbar */}
      <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="w-full bg-black/20 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors">
          <Filter className="w-4 h-4" />
          <span>Filtros</span>
        </button>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-black/20 border-b border-white/10">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-4 font-medium tracking-wider">
                  {col.header}
                </th>
              ))}
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-8 text-center text-white">
                  No se encontraron registros.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  {columns.map((col, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-white">
                      {col.render ? col.render(item[col.accessor], item) : (item[col.accessor] as ReactNode)}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <button 
                      className="p-2 hover:bg-white/10 rounded-md transition-colors text-white hover:text-white"
                      aria-label="Más acciones"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Table Pagination Placeholder */}
      <div className="p-4 border-t border-white/10 flex items-center justify-between text-sm text-white/85">
        <span>Mostrando {data.length} registros</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 disabled:opacity-50">Anterior</button>
          <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 disabled:opacity-50">Siguiente</button>
        </div>
      </div>
    </div>
  );
}
