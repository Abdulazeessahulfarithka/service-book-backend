import express from "express";

import {
  createBooking,
  getAllBookings,
  getBookingById,
  getMyBookings,
  assignTechnician,
  updateBookingStatus,
  cancelBooking,
  deleteBooking,
} from "../Controller/bookingContoller.js";

import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Booking
router.post("/create", requireSignIn, createBooking);

// Get Logged-in User Bookings
router.get("/my-bookings", requireSignIn, getMyBookings);

// Get All Bookings (Admin)
router.get("/all", getAllBookings);

// Get Booking By ID
router.get("/:id", getBookingById);

// Assign Technician
router.put("/assign/:id", assignTechnician);

// Update Booking Status
router.put("/status/:id", updateBookingStatus);

// Cancel Booking
router.put("/cancel/:id", cancelBooking);

// Delete Booking
router.delete("/delete/:id", deleteBooking);

export default router;