import express from "express";

import {
  registerTechnician,
  loginTechnician,
  getAllTechnicians,
  getTechnicianById,
  updateTechnician,
  deleteTechnician,
  technicianProfile,
} from "../Controller/technicianController.js";
import technicianAuth from "../Middleware/technicianAuth.js";


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

router.get("/profile",technicianAuth,technicianProfile)
export default router;