import express from "express"
import { addSerivce, getAllService } from "../Controller/serviceController.js"

const router = express.Router()

router.post("/add",addSerivce)
router.get("/getservice",getAllService)



export default router;