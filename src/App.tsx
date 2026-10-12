import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

// Lazy load public pages
const Home = lazy(() => import("./pages/public").then(module => ({ default: module.Home })));
const About = lazy(() => import("./pages/public").then(module => ({ default: module.About })));
const PublicServices = lazy(() => import("./pages/public").then(module => ({ default: module.Services })));
const Catalog = lazy(() => import("./pages/public").then(module => ({ default: module.Catalog })));
const Support = lazy(() => import("./pages/public").then(module => ({ default: module.Support })));
const Contact = lazy(() => import("./pages/public").then(module => ({ default: module.Contact })));

// Lazy load admin pages
const Dashboard = lazy(() => import("./pages/admin").then(module => ({ default: module.Dashboard })));
const Login = lazy(() => import("./pages/admin").then(module => ({ default: module.Login })));
const Clientes = lazy(() => import("./pages/admin").then(module => ({ default: module.Clientes })));
const AdminServices = lazy(() => import("./pages/admin").then(module => ({ default: module.Servicios })));
const Incidencias = lazy(() => import("./pages/admin").then(module => ({ default: module.Incidencias })));
const Cotizaciones = lazy(() => import("./pages/admin").then(module => ({ default: module.Cotizaciones })));
const Licencias = lazy(() => import("./pages/admin").then(module => ({ default: module.Licencias })));
const Productos = lazy(() => import("./pages/admin").then(module => ({ default: module.Productos })));
const Usuarios = lazy(() => import("./pages/admin").then(module => ({ default: module.Usuarios })));

const SuspenseFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#050505]">
    <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseFallback />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<PublicServices />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/soporte" element={<Support />} />
            <Route path="/contacto" element={<Contact />} />
          </Route>

          {/* Admin Login Route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="servicios" element={<AdminServices />} />
            <Route path="incidencias" element={<Incidencias />} />
            <Route path="cotizaciones" element={<Cotizaciones />} />
            <Route path="licencias" element={<Licencias />} />
            <Route path="productos" element={<Productos />} />
            <Route path="usuarios" element={<Usuarios />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
