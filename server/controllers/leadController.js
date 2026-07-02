import Lead from "../models/Lead.js";

// =====================================
// Get All Leads (Only Logged-in User)
// =====================================
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch leads",
      error: error.message,
    });
  }
};

// =====================================
// Create Lead
// =====================================
export const createLead = async (req, res) => {
  try {
    const { name, company, status } = req.body;

    const newLead = await Lead.create({
      user: req.user._id,
      name,
      company,
      status,
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead: newLead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create lead",
      error: error.message,
    });
  }
};

// =====================================
// Update Lead
// =====================================
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    // Ownership Check
    if (lead.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    lead.name = req.body.name || lead.name;
    lead.company = req.body.company || lead.company;
    lead.status = req.body.status || lead.status;

    const updatedLead = await lead.save();

    res.status(200).json({
      message: "Lead updated successfully",
      lead: updatedLead,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update lead",
      error: error.message,
    });
  }
};

// =====================================
// Delete Lead
// =====================================
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    // Ownership Check
    if (lead.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await lead.deleteOne();

    res.status(200).json({
      message: "Lead deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete lead",
      error: error.message,
    });
  }
};