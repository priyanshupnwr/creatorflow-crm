import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "block px-4 py-3 rounded-lg transition hover:bg-blue-100";

  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">
        CreatorFlow
      </h2>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/leads"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`
          }
        >
          Leads
        </NavLink>

        <NavLink
          to="/pipeline"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`
          }
        >
          Pipeline
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkClass} ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700"
            }`
          }
        >
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;