const express = require("express");
const { createBooking, getBookings, deleteBooking } = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking); // Create a booking
router.get("/", getBookings); // Get bookings by date
router.delete("/:id", deleteBooking); // Delete a booking

module.exports = router;
