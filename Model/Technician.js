import mongoose from "mongoose";

const technicianSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },

    specialization: [
      {
        type: String,
        enum: [
          "Washing Machine",
          "Refrigerator",
          "Air Conditioner",
          "Television",
          "Microwave Oven",
          "Water Purifier",
          "Dishwasher",
          "Geyser",
        ],
      },
    ],

    experience: {
      type: Number,
      default: 0,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Technician", technicianSchema);