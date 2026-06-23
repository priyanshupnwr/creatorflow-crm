import leads from "../../data/leads";
import LeadCard from "../../components/common/LeadCard";

function Leads() {
  return (
    <div>
      <h1>Leads</h1>

      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
        />
      ))}
    </div>
  );
}

export default Leads;