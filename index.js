 import express from "express"; 
import dotenv from "dotenv";
 import cors from "cors"
 import db from "./Config/db.js";
 import userRoutes from "./Route/userRoute.js"
 import serviceRoutes from "./Route/serviceRoute.js"
 import technicianRoutes from "./Route/technicianRoute.js"
 import bookingRoutes from "./Route/bookingRoute.js"
 import paymentRoute from "./Route/paymentRoute.js";
 import adminRoute from "./Route/adminRoute.js";
 import reviewRoute from "./Route/reviewRoute.js";
 
 dotenv.config()

 const app = express()

 //database connection
 db()

 app.use(express.json())
 app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://service-book-backend-2.onrender.com/", // replace later with your Vercel URL
    ],
    credentials: true,
  })
);
 
const PORT = process.env.PORT || 5000;

//routes
app.use("/api/user",userRoutes)
app.use('/api/service',serviceRoutes)
app.use('/api/technician',technicianRoutes)
app.use('/api/booking',bookingRoutes)
app.use("/api/payment", paymentRoute);
app.use("/api/admin", adminRoute);
app.use("/api/review", reviewRoute);



// Test route
app.get("/", (req, res) => {
  res.send("hello world");      
});

app.listen(PORT, () => {
  console.log(`Server is connected on port ${PORT}`);
});