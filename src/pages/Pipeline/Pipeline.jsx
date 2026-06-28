import { useContext } from "react";
import { LeadContext } from "../../context/LeadContext";
import PipelineColumn from "../../components/pipeline/PipelineColumn";

function Pipeline() {
  const { leads } = useContext(LeadContext);

  const newLeads = leads.filter((lead) => lead.status === "New");

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  );

  const interestedLeads = leads.filter(
    (lead) => lead.status === "Interested"
  );

  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Sales Pipeline
        </h1>

        <p className="text-gray-500 mt-2">
          Track your leads through each stage of the sales process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <PipelineColumn
          title="New"
          leads={newLeads}
        />

        <PipelineColumn
          title="Contacted"
          leads={contactedLeads}
        />

        <PipelineColumn
          title="Interested"
          leads={interestedLeads}
        />

        <PipelineColumn
          title="Converted"
          leads={convertedLeads}
        />
      </div>
    </div>
  );
}

export default Pipeline;