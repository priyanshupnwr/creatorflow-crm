import leads from "../../data/leads";

function Leads() {
  return (
    <div>
      <h1>Leads</h1>

      {leads.map((lead) => (
        <div key={lead.id}>
          <h3>{lead.name}</h3>
          <p>{lead.company}</p>
          <p>{lead.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Leads;