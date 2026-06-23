import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div>
        <Sidebar />
        {children}
      </div>
    </>
  );
}

export default MainLayout;