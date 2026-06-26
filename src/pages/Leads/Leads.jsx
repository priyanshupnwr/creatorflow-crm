import { useState } from "react";
import leadsData from "../../data/leads";
import LeadCard from "../../components/common/LeadCard";

function Leads() {
  const [leads, setLeads] = useState(leadsData);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [editingLead, setEditingLead] = useState(null);

 function addLead() {
  if (!name || !company || !status) {
    alert("Please fill all fields");
    return;
  }

  const leadExists = leads.some(
    (lead) =>
      lead.name.toLowerCase() === name.toLowerCase() &&
      lead.company.toLowerCase() === company.toLowerCase()
  );

  if (leadExists) {
    alert("Lead already exists!");
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

  alert("Lead added successfully!");
}

  function updateLead() {
  if (!name || !company || !status) {
    alert("Please fill all fields");
    return;
  }

  const updatedLeads = leads.map((lead) => {
    if (lead.id === editingLead.id) {
      return {
        ...lead,
        name,
        company,
        status,
      };
    }

    return lead;
  });

  setLeads(updatedLeads);

  setEditingLead(null);
  setName("");
  setCompany("");
  setStatus("");

  alert("Lead updated successfully!");
}
function deleteLead(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  const updatedLeads = leads.filter((lead) => lead.id !== id);

  setLeads(updatedLeads);
}

function editLead(lead) {
  setEditingLead(lead);

  setName(lead.name);
  setCompany(lead.company);
  setStatus(lead.status);
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

        <button
          onClick={editingLead ? updateLead : addLead}
        >
          {editingLead ? "Update Lead" : "Add Lead"}
        </button>
      </div>

      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          onDelete={deleteLead}
          onEdit={editLead}
        />
      ))}
    </div>
  );
}

export default Leads;