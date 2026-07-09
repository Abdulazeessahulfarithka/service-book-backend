import User from "../Model/User.js";
import Service from "../Model/Service.js";
import Technician from "../Model/Technician.js";
import Booking from "../Model/Booking.js";

// Dashboard
export const dashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalServices = await Service.countDocuments();
    const totalTechnicians = await Technician.countDocuments();
    const totalBookings = await Booking.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      bookingStatus: "Pending",
    });

    const completedBookings = await Booking.countDocuments({
      bookingStatus: "Completed",
    });

    res.status(200).json({
      success: true,
      dashboard: {
        totalUsers,
        totalServices,
        totalTechnicians,
        totalBookings,
        pendingBookings,
        completedBookings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Technicians
export const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find().select("-password");

    res.status(200).json({
      success: true,
      technicians,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("service")
      .populate("technician");

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Service
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};  