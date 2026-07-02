import LeadCardMini from "./LeadCardMini";

function PipelineColumn({ title, leads }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 min-h-[450px]">
      <h2 className="text-lg font-bold mb-4">
        {title}
      </h2>

      <div className="space-y-3">
        {leads.map((lead) => (
          <LeadCardMini
            key={lead._id}
            lead={lead}
          />
        ))}
      </div>
    </div>
  );
}

export default PipelineColumn;