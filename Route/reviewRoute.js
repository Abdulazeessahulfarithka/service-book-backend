import express from "express";

import {
  addReview,
  getAllReviews,
  getReviewById,
  deleteReview,
} from "../Controller/reviewController.js";

import { requireSignIn } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", requireSignIn, addReview);

router.get("/all", getAllReviews);

router.get("/:id", getReviewById);

router.delete("/delete/:id", requireSignIn, deleteReview);

export default router;