function LeadCardMini({ lead }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 border-l-4 border-blue-500">
      <h3 className="font-semibold">
        {lead.name}
      </h3>

      <p className="text-sm text-gray-500">
        {lead.company}
      </p>
    </div>
  );
}

export default LeadCardMini;