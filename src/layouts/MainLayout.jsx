import "./MainLayout.css";

import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      <div className="layout-body">
        <Sidebar />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;