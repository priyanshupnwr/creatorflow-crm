import StatCard from "../../components/common/StatCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <StatCard title="Total Leads" value="24" />
      <StatCard title="Contacted" value="12" />
      <StatCard title="Interested" value="5" />
      <StatCard title="Converted" value="2" />
      <StatCard title="Pending Followups" value="7" />
    </div>
  );
}

export default Dashboard;