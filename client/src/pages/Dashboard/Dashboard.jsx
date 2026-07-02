import { useContext } from "react";
import { LeadContext } from "../../context/LeadContext";
import StatCard from "../../components/common/StatCard";
import LeadChart from "../../components/dashboard/LeadChart";

function Dashboard() {
  const { leads, loading } = useContext(LeadContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-2xl font-semibold">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

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

  const conversionRate =
    totalLeads === 0
      ? 0
      : ((convertedLeads / totalLeads) * 100).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your CRM.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

        <StatCard
          title="Conversion Rate"
          value={`${conversionRate}%`}
          color="text-emerald-600"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700">
          {leads.length > 0 ? (
            leads
              .slice(-5)
              .reverse()
              .map((lead) => (
                <li key={lead._id}>
                  🆕{" "}
                  <strong>{lead.name}</strong> from{" "}
                  <strong>{lead.company}</strong> (
                  {lead.status})
                </li>
              ))
          ) : (
            <li className="text-gray-500">
              No recent activity.
            </li>
          )}
        </ul>
      </div>

      {/* Chart */}
      <div className="mt-8">
        <LeadChart leads={leads} />
      </div>
    </div>
  );
}

export default Dashboard;