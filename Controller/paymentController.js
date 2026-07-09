import Payment from "../Model/Payment.js";
import Booking from "../Model/Booking.js";

// Create Payment
export const createPayment = async (req, res) => {
  try {
    const {
      booking,
      user,
      amount,
      paymentMethod,
      transactionId,
    } = req.body;

    const payment = await Payment.create({
      booking,
      user,
      amount,
      paymentMethod,
      transactionId,
      paymentStatus: "Paid",
      paidAt: new Date(),
    });

    await Booking.findByIdAndUpdate(booking, {
      paymentStatus: "Paid",
    });

    res.status(201).json({
      success: true,
      message: "Payment successful",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user")
      .populate("booking");

    res.status(200).json({
      success: true,
      count: payments.length,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Payment By ID
export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id)
      .populate("user")
      .populate("booking");

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.status(200).json({
      success: true,
      payment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Logged-in User Payments
export const getMyPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      user: req.user._id,
    }).populate("booking");

    res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Payment
export const deletePayment = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Payment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};