import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Washing Machine",
        "Refrigerator",
        "Air Conditioner",
        "Television",
        "Microwave Oven",
        "Water Purifier",
        "Dishwasher",
        "Geyser"
      ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    serviceCharge: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Service", serviceSchema);