 import express from "express"; 
import dotenv from "dotenv";
 import cors from "cors"
 import db from "./Config/db.js";
 import userRoutes from "./Route/userRoute.js"
 
 
 dotenv.config()

 const app = express()

 //database connection
 db()

 app.use(express.json())
 app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

//routes
app.use("/api/user",userRoutes)

// Test route
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});