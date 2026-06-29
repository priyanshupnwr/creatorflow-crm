import axios from "axios";

const API_URL = "http://localhost:5000/api/leads";

// Get All Leads
export const getLeads = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create Lead
export const createLead = async (leadData) => {
  const response = await axios.post(API_URL, leadData);
  return response.data;
};

// Update Lead
export const updateLead = async (id, leadData) => {
  const response = await axios.put(`${API_URL}/${id}`, leadData);
  return response.data;
};

// Delete Lead
export const deleteLead = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};