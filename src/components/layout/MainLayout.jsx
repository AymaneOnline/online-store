import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 p-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
