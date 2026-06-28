import StatCard from "../../components/common/StatCard";

function Dashboard() {
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
          value={24}
          color="text-blue-600"
        />

        <StatCard
          title="New Leads"
          value={8}
          color="text-green-600"
        />

        <StatCard
          title="Interested"
          value={6}
          color="text-yellow-500"
        />

        <StatCard
          title="Converted"
          value={10}
          color="text-purple-600"
        />
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>✅ Rahul Sharma added as a new lead.</li>
          <li>📞 Aman Verma moved to Contacted.</li>
          <li>🎉 Priya Singh converted successfully.</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;