import { useContext } from "react";
import { LeadContext } from "../../context/LeadContext";
import StatCard from "../../components/common/StatCard";

function Dashboard() {
  const { leads } = useContext(LeadContext);

const totalLeads = leads.length;

const newLeads = leads.filter(
  (lead) => lead.status === "New"
).length;

const contactedLeads = leads.filter(
  (lead) => lead.status === "Contacted"
).length;

const interestedLeads = leads.filter(
  (lead) => lead.status === "Interested"
).length;

const convertedLeads = leads.filter(
  (lead) => lead.status === "Converted"
).length;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your CRM.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
  <StatCard
    title="Total Leads"
    value={totalLeads}
    color="text-blue-600"
  />

  <StatCard
    title="New"
    value={newLeads}
    color="text-green-600"
  />

  <StatCard
    title="Contacted"
    value={contactedLeads}
    color="text-orange-500"
  />

  <StatCard
    title="Interested"
    value={interestedLeads}
    color="text-yellow-500"
  />

  <StatCard
    title="Converted"
    value={convertedLeads}
    color="text-purple-600"
  />
</div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">
  {leads.length > 0 ? (
    leads
      .slice(-5)
      .reverse()
      .map((lead) => (
        <li key={lead.id}>
          🆕 <strong>{lead.name}</strong> from{" "}
          <strong>{lead.company}</strong> ({lead.status})
        </li>
      ))
  ) : (
    <p className="text-gray-500">
      No recent activity.
    </p>
  )}
</ul>
      </div>
    </div>
  );
}

export default Dashboard;