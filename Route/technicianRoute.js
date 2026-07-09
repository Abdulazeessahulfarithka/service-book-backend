import express from "express";

import {
  registerTechnician,
  loginTechnician,
  getAllTechnicians,
  getTechnicianById,
  updateTechnician,
  deleteTechnician,
} from "../Controller/technicianController.js";

const router = express.Router();

// Register Technician
router.post("/register", registerTechnician);

// Login Technician
router.post("/login", loginTechnician);

// Get All Technicians
router.get("/all", getAllTechnicians);

// Get Technician By ID
router.get("/:id", getTechnicianById);

// Update Technician
router.put("/update/:id", updateTechnician);

// Delete Technician
router.delete("/delete/:id", deleteTechnician);

export default router;