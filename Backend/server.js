require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Import cors
const connect = require("./src/db/mongodb");
const bookingRoutes = require("./src/routes/bookingRoutes");

const app = express();

// Enable CORS for frontend
app.use(cors({
    origin: ["http://localhost:3000", "https://restaurant-table-booking-system-zeta.vercel.app/"],  // Allow both origins
    methods: ["GET", "POST", "DELETE", "PUT"],  // Allow specific methods
    allowedHeaders: ["Content-Type"],  // Allow specific headers
  }));

// Middleware
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);

// Database Connection
connect();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
