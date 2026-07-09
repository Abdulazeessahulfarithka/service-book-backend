import express from "express"
import { addSerivce } from "../Controller/serviceController.js"

const router = express.Router()

router.post("/add",addSerivce)



export default router;