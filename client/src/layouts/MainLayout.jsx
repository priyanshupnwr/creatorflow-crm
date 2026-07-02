import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  const location = useLocation();

  const authPages = ["/login", "/register"];

  const isAuthPage = authPages.includes(location.pathname);

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;