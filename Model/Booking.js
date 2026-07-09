                            import mongoose from "mongoose";

                            const bookingSchema = new mongoose.Schema(
                              {
                                user: {
                                  type: mongoose.Schema.Types.ObjectId,
                                  ref: "User",
                                  required: true,
                                },

                                service: {
                                  type: mongoose.Schema.Types.ObjectId,
                                  ref: "Service",
                                  required: true,
                                },

                                technician: {
                                  type: mongoose.Schema.Types.ObjectId,
                                  ref: "Technician",
                                  default: null,
                                },

                                customerName: {
                                  type: String,
                                  required: true,
                                  trim: true,
                                },

                                mobile: {
                                  type: String,
                                  required: true,
                                },

                                email: {
                                  type: String,
                                  required: true,
                                  lowercase: true,
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

                                bookingDate: {
                                  type: Date,
                                  required: true,
                                },

                                preferredTime: {
                                  type: String,
                                  required: true,
                                },

                                problemDescription: {
                                  type: String,
                                  required: true,
                                },

                                amount: {
                                  type: Number,
                                  required: true,
                                },

                                paymentStatus: {
                                  type: String,
                                  enum: ["Pending", "Paid"],
                                  default: "Pending",
                                },

                                bookingStatus: {
                                  type: String,
                                  enum: [
                                    "Pending",
                                    "Assigned",
                                    "Accepted",
                                    "On the Way",
                                    "Completed",
                                    "Cancelled",
                                  ],
                                  default: "Pending",
                                },
                              },                
                              {
                                timestamps: true,
                              }
                            );

                            export default mongoose.model("Booking", bookingSchema);