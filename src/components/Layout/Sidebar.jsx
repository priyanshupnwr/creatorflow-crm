import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h2>CreatorFlow</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/leads">Leads</Link>
        </li>

        <li>
          <Link to="/pipeline">Pipeline</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;