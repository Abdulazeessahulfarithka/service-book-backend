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

import { requireSignIn } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", requireSignIn, createBooking);
router.get("/my-bookings", requireSignIn, getMyBookings);
router.get("/all", getAllBookings);
router.get("/:id", getBookingById);
router.put("/assign/:id", assignTechnician);
router.put("/status/:id", updateBookingStatus);
router.put("/cancel/:id", cancelBooking);
router.delete("/delete/:id", deleteBooking);

export default router;