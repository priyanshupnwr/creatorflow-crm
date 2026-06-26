import { useState } from "react";
import leadsData from "../../data/leads";
import LeadCard from "../../components/common/LeadCard";

function Leads() {
  const [leads, setLeads] = useState(leadsData);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");

  function addLead() {
    if (!name || !company || !status) {
    alert("Please fill all fields");
    return;
  }
    const newLead = {
      id: Date.now(),
      name,
      company,
      status,
    };

    setLeads([...leads, newLead]);
    setName("");
    setCompany("");
    setStatus("");
  }

  function deleteLead(id) {
  const updatedLeads = leads.filter((lead) => {
    return lead.id !== id;
  });

  setLeads(updatedLeads);
}
  return (
    <div>
      <h1>Leads</h1>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Interested">Interested</option>
          <option value="Converted">Converted</option>
        </select>

        <button onClick={addLead}>
          Add Lead
        </button>
      </div>

      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          onDelete={deleteLead}
        />
      ))}
    </div>
  );
}

export default Leads;