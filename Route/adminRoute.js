import express from "express";

import {
  dashboard,
  getAllUsers,
  getAllServices,
  getAllTechnicians,
  getAllBookings,
  deleteUser,
  deleteService,
  deleteBooking,
} from "../Controller/adminController.js";

import { requireSignIn } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Dashboard
router.get("/dashboard", requireSignIn, dashboard);

// Users
router.get("/users", requireSignIn, getAllUsers);
router.delete("/user/:id", requireSignIn, deleteUser);

// Services
router.get("/services", requireSignIn, getAllServices);
router.delete("/service/:id", requireSignIn, deleteService);

// Technicians
router.get("/technicians", requireSignIn, getAllTechnicians);

// Bookings
router.get("/bookings", requireSignIn, getAllBookings);
router.delete("/booking/:id", requireSignIn, deleteBooking);

export default router;