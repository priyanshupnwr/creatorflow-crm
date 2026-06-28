import { createContext, useEffect, useState } from "react";
import leadsData from "../data/leads";

export const LeadContext = createContext();

function LeadProvider({ children }) {
  const [leads, setLeads] = useState(() => {
    const savedLeads = localStorage.getItem("leads");

    if (savedLeads) {
      return JSON.parse(savedLeads);
    }

    return leadsData;
  });

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  return (
    <LeadContext.Provider value={{ leads, setLeads }}>
      {children}
    </LeadContext.Provider>
  );
}

export default LeadProvider;