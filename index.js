import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./Config/db.js";
import userRoutes from "./Route/userRoute.js";
import serviceRoutes from "./Route/serviceRoute.js";
import technicianRoutes from "./Route/technicianRoute.js";
import bookingRoutes from "./Route/bookingRoute.js";
import paymentRoute from "./Route/paymentRoute.js";
import adminRoute from "./Route/adminRoute.js";
import reviewRoute from "./Route/reviewRoute.js";

dotenv.config();

const app = express();

// Database Connection
db();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors({
  origin: [
    "https://service-book-backend-3.onrender.com/", // Your Netlify domain
    "http://localhost:3000"              // Local development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Routes
app.use("/api/user", userRoutes);
app.use("/api/service", serviceRoutes);
app.use("/api/technician", technicianRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/payment", paymentRoute);
app.use("/api/admin", adminRoute);
app.use("/api/review", reviewRoute);

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});