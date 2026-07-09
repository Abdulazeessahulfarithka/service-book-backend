import express from "express";

import {
  createPayment,
  getAllPayments,
  getPaymentById,
  getMyPayments,
  deletePayment,
} from "../Controller/paymentController.js";

import { requireSignIn } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Create Payment
router.post("/create", requireSignIn, createPayment);

// Get Logged-in User Payments
router.get("/my-payments", requireSignIn, getMyPayments);

// Get All Payments
router.get("/all", getAllPayments);

// Get Payment By ID
router.get("/:id", getPaymentById);

// Delete Payment
router.delete("/delete/:id", deletePayment);

export default router;