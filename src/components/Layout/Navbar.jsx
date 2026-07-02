import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          CreatorFlow CRM
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">
          Welcome, {user?.name} 👋
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold uppercase">
          {user?.name?.charAt(0)}
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;