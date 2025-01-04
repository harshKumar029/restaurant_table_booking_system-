// controllers/bookingController.js
const Booking = require('../model/bookingModel');

    // Create a new booking
    // exports.createBooking = async (req, res) => {
    //     try {
    //       const { date, timeSlot, numberOfGuests, name, contact } = req.body;
      
    //       console.log("Received Data:", date, timeSlot, numberOfGuests, name, contact);
      
    //       // Convert numberOfGuests to a number
    //       const guestsCount = parseInt(numberOfGuests, 10);
      
    //       if (isNaN(guestsCount) || guestsCount <= 0) {
    //         return res.status(400).json({ message: "Invalid number of guests." });
    //       }
      
    //       // Fetch current bookings for the date and time slot
    //       const bookings = await Booking.find({ date, timeSlot });
    //       const currentGuestCount = bookings.reduce(
    //         (sum, booking) => sum + booking.numberOfGuests,
    //         0
    //       );
    //       console.log("Current Bookings:", bookings, "Current Guest Count:", currentGuestCount);
      
    //       // Check if adding this booking exceeds the limit
    //       if (currentGuestCount + guestsCount > 10) {
    //         console.log("Time slot is already full.");
    //         return res.status(400).json({ message: "Time slot is already full." });
    //       }
      
    //       // Create a new booking
    //       const newBooking = new Booking({
    //         date,
    //         timeSlot,
    //         numberOfGuests: guestsCount,
    //         name,
    //         contact,
    //       });
    //       await newBooking.save();
      
    //       console.log("New Booking Created:", newBooking);
      
    //       res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
    //     } catch (error) {
    //       console.error("Error creating booking:", error);
    //       res.status(500).json({ message: "Error creating booking.", error });
    //     }
    //   };

      exports.createBooking = async (req, res) => {
        try {
            const { date, timeSlot, numberOfGuests, name, contact } = req.body;
    
            console.log("Received Data:", date, timeSlot, numberOfGuests, name, contact);
    
            // Convert numberOfGuests to a number
            const guestsCount = parseInt(numberOfGuests, 10);
    
            if (isNaN(guestsCount) || guestsCount <= 0) {
                return res.status(400).json({ message: "Invalid number of guests." });
            }
    
            // Check if the exact booking already exists for the given date, timeSlot, and numberOfGuests
            const existingBooking = await Booking.findOne({
                date,
                timeSlot,
                numberOfGuests:guestsCount ,
                name,
                contact,
            });
    
            // If the exact booking exists, return an error
            if (existingBooking) {
                console.log("Exact booking already exists:", existingBooking);
                return res.status(400).json({ message: "This exact booking already exists." });
            }
    
            // Fetch current bookings for the date and time slot
            const bookings = await Booking.find({ date, timeSlot });
            const currentGuestCount = bookings.reduce(
                (sum, booking) => sum + booking.numberOfGuests,
                0
            );
            console.log("Current Bookings:", bookings, "Current Guest Count:", currentGuestCount);
    
            // Check if adding this booking exceeds the limit
            if (currentGuestCount + guestsCount > 10) {
                console.log("Time slot is already full.");
                return res.status(400).json({ message: "Time slot is already full." });
            }
    
            // Create a new booking
            const newBooking = new Booking({
                date,
                timeSlot,
                numberOfGuests: guestsCount,
                name,
                contact,
            });
            await newBooking.save();
    
            console.log("New Booking Created:", newBooking);
    
            res.status(201).json({ message: "Booking created successfully.", booking: newBooking });
        } catch (error) {
            console.error("Error creating booking:", error);
            res.status(500).json({ message: "Error creating booking.", error });
        }
    };
    
      
      
    
    // Get bookings for a specific date
// Backend: API to fetch all bookings
exports.getBookings = async (req, res) => {
    try {
      // Fetch all bookings from the database without any filters
      const bookings = await Booking.find(); // No filters applied here
//   console.log(bookings)
      // Return the full list of bookings
      res.status(200).json({ bookings });
    } catch (error) {
      res.status(500).json({ message: "Error fetching bookings.", error });
    }
  };
  
      
      
    
    // Delete a booking
    exports.deleteBooking = async (req, res) => {
        try {
          const { id } = req.params;
          const deletedBooking = await Booking.findByIdAndDelete(id);
      
          if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found." });
          }
      
          res.status(200).json({ message: "Booking deleted successfully.", booking: deletedBooking });
        } catch (error) {
          res.status(500).json({ message: "Error deleting booking.", error });
        }
      };
      
    