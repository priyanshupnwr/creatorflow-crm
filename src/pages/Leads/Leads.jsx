import { useContext, useState } from "react";
import { LeadContext } from "../../context/LeadContext";
import LeadCard from "../../components/common/LeadCard";

function Leads() {
  const { leads, setLeads } = useContext(LeadContext);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [editingLead, setEditingLead] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

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

    setLeads(leads.filter((lead) => lead.id !== id));
  }

  function editLead(lead) {
    setEditingLead(lead);

    setName(lead.name);
    setCompany(lead.company);
    setStatus(lead.status);
  }

  // Search + Filter
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || lead.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Leads</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Interested">Interested</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Lead Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Interested">Interested</option>
            <option value="Converted">Converted</option>
          </select>

          <button
            onClick={editingLead ? updateLead : addLead}
            className={`rounded-lg text-white font-medium px-4 py-3 transition ${
              editingLead
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {editingLead ? "Update Lead" : "Add Lead"}
          </button>
        </div>
      </div>

      {/* Lead Cards */}
      <div className="space-y-4">
        {filteredLeads.length > 0 ? (
          filteredLeads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onDelete={deleteLead}
              onEdit={editLead}
            />
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Leads Found 😕
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search or change the filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leads;