import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    // Lead Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Lead Name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // Company Name
    company: {
      type: String,
      required: true,
      trim: true,
    },

    // Lead Status
    status: {
      type: String,
      enum: ["New", "Contacted", "Interested", "Converted"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;