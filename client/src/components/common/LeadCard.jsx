function LeadCard({ lead, onDelete, onEdit }) {
  const statusColors = {
    New: "bg-blue-100 text-blue-700",
    Contacted: "bg-yellow-100 text-yellow-700",
    Interested: "bg-purple-100 text-purple-700",
    Converted: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">{lead.name}</h2>

          <p className="text-gray-500">{lead.company}</p>

          <span
            className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[lead.status]
            }`}
          >
            {lead.status}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(lead)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(lead._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;