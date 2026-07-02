import { createContext, useEffect, useState } from "react";
import {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
} from "../services/leadService";

export const LeadContext = createContext();

function LeadProvider({ children }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all leads
  const fetchLeads = async () => {
    try {
      setLoading(true);

      const data = await getLeads();
      setLeads(data);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Add Lead
  const addLead = async (leadData) => {
    try {
      await createLead(leadData);
      await fetchLeads();
    } catch (error) {
      console.error("Failed to add lead:", error);
      throw error;
    }
  };

  // Update Lead
  const editLead = async (id, leadData) => {
    try {
      await updateLead(id, leadData);
      await fetchLeads();
    } catch (error) {
      console.error("Failed to update lead:", error);
      throw error;
    }
  };

  // Delete Lead
  const removeLead = async (id) => {
    try {
      await deleteLead(id);
      await fetchLeads();
    } catch (error) {
      console.error("Failed to delete lead:", error);
      throw error;
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        loading,
        fetchLeads,
        addLead,
        editLead,
        removeLead,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export default LeadProvider;