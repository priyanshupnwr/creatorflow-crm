import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function LeadChart({ leads }) {
  const data = [
    {
      name: "New",
      value: leads.filter((lead) => lead.status === "New").length,
    },
    {
      name: "Contacted",
      value: leads.filter((lead) => lead.status === "Contacted").length,
    },
    {
      name: "Interested",
      value: leads.filter((lead) => lead.status === "Interested").length,
    },
    {
      name: "Converted",
      value: leads.filter((lead) => lead.status === "Converted").length,
    },
  ];

  const COLORS = [
    "#3B82F6",
    "#F97316",
    "#EAB308",
    "#22C55E",
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">
        Lead Distribution
      </h2>

      <PieChart width={350} height={300}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default LeadChart;