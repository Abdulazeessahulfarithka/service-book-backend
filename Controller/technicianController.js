import Technician from "../Model/Technician.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Technician
export const registerTechnician = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      password,
      specialization,
      experience,           
      address,
      city,
      pincode,
    } = req.body;

    const technicianExists = await Technician.findOne({email    });

    if (technicianExists) {
      return res.status(400).json({
        success: false,
        message: "Technician already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const technician = await Technician.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      specialization,
      experience,
      address,
      city,
      pincode,
    });

    res.status(201).json({
      success: true,
      message: "Technician registered successfully",
      technician,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Technician
export const loginTechnician = async (req, res) => {
  try {
    const { email, password } = req.body;

    const technician = await Technician.findOne({ email });

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: "Technician not found",
      });
    }

    const isMatch = await bcrypt.compare(password, technician.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: technician._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      technician,
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

// Get Technician By ID
export const getTechnicianById = async (req, res) => {
  try {
    const technician = await Technician.findById(req.params.id).select("-password");

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: "Technician not found",
      });
    }

    res.status(200).json({
      success: true,
      technician,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Technician
export const updateTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: "Technician not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Technician updated successfully",
      technician,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Technician
export const deleteTechnician = async (req, res) => {
  try {
    const technician = await Technician.findByIdAndDelete(req.params.id);

    if (!technician) {
      return res.status(404).json({
        success: false,
        message: "Technician not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Technician deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const technicianProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      technician: req.technician,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};