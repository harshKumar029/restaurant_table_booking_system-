const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  numberOfGuests: { type: Number, required: true },
  name: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
