import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-background text-foreground">
      {/* Background glow effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-dark/20 blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
      </div>
      
      <Navbar />

      <main className="flex-1 relative z-10 w-full pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
