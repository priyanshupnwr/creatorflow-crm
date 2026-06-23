import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/pipeline">Pipeline</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;