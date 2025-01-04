"use client"
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Canteen from "../../../../public/image/Canteen.jpg";
import axios from "axios";

// Component with Suspense to handle the client-side data
const AvailableSlotsPage = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nearestSlot, setNearestSlot] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const date = searchParams.get("date");
  const timeSlot = searchParams.get("timeSlot");
  const numberOfGuests = searchParams.get("numberOfGuests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  useEffect(() => {
    axios
      .get("https://restaurant-table-booking-system-188x.onrender.com/api/bookings")
      .then((response) => {
        const bookings = response.data.bookings || [];

        // Generate all possible time slots from 6:00 AM to 10:00 PM
        const allSlots = [];
        for (let hour = 6; hour < 22; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour}:${minute === 0 ? "00" : "30"}`;
            allSlots.push(time);
          }
        }

        // Reduce the bookings to find how many guests are booked for each slot
        const availableSlots = bookings.reduce((acc, booking) => {
          const { timeSlot, numberOfGuests } = booking;
          if (!acc[timeSlot]) {
            acc[timeSlot] = 0;
          }
          acc[timeSlot] += numberOfGuests;
          return acc;
        }, {});

        // Create a list of all slots with remaining availability
        const availableSlotsList = allSlots.map((slot) => {
          const bookedGuests = availableSlots[slot] || 0;
          return {
            timeSlot: slot,
            bookedGuests,
            remainingSlots: 10 - bookedGuests,
          };
        });

        setSlots(availableSlotsList);
        setLoading(false);
        console.log("Available Slots:", availableSlotsList);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  const handleSlotSelection = (slot) => {
    const existingSlot = slots.find((s) => s.timeSlot === slot.timeSlot);
    const availableSeats = existingSlot ? 10 - existingSlot.bookedGuests : 10;

    if (availableSeats <= 0) {
      alert(`No available seats for the selected time slot: ${slot.timeSlot}`);
      return;
    }

    if (availableSeats < Number(numberOfGuests)) {
      alert(`Please reduce guests or choose another time. `);
      return;
    }

    const bookingDetails = {
      date,
      timeSlot: slot.timeSlot,
      numberOfGuests,
      name,
      contact,
    };

    axios
      .post("https://restaurant-table-booking-system-188x.onrender.com/api/bookings", bookingDetails)
      .then((response) => {
        const queryParams = new URLSearchParams(bookingDetails).toString();
        router.push(`/booking/bookingConfirmation?${queryParams}`);
      })
      .catch((err) => {
        console.error("This is the error:", err);

        const errorMessage = err.response?.data?.message || err.message || "Unknown error occurred";
    
        alert(`There was an error. ${errorMessage}`);
      });
  };

  const findNearestAvailableSlot = () => {
    if (!slots || slots.length === 0) return null;

    const sortedSlots = [...slots].sort((a, b) => {
      const timeA = a.timeSlot.split(":").map(Number).join("");
      const timeB = b.timeSlot.split(":").map(Number).join("");
      return timeA - timeB;
    });

    return sortedSlots.find((slot) => slot.remainingSlots > 0);
  };

  const selectedSlot = slots.find((slot) => slot.timeSlot === timeSlot);
  const adjustedSelectedSlot = selectedSlot || {
    timeSlot,
    bookedGuests: 0,
    remainingSlots: 10,
  };
  const nearestSlotAvailable =
    adjustedSelectedSlot.remainingSlots <= 0
      ? findNearestAvailableSlot()
      : null;

  return (
    <div className="available-slots-page min-h-screen flex items-center justify-center  px-4 md:px-10">
      <div
        className="relative max-w-3xl w-full bg-cover bg-center rounded-lg shadow-xl p-6 md:p-10"
        style={{
          backgroundImage: `url(${Canteen.src})`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-lg "></div>
        <div className="relative z-10 ">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
            Available Slots
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-white">
            <div>
              <p className="text-lg font-medium">
                <span className="font-bold">Date:</span> {date}
              </p>
              <p className="text-lg font-medium">
                <span className="font-bold">Time Slot:</span> {timeSlot}
              </p>
              <p className="text-lg font-medium">
                <span className="font-bold">Guests:</span> {numberOfGuests}
              </p>
            </div>
            <div>
              <p className="text-lg font-medium">
                <span className="font-bold">Name:</span> {name}
              </p>
              <p className="text-lg font-medium">
                <span className="font-bold">Contact:</span> {contact}
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[white]">
            Select a Time Slot
          </h2>
          {adjustedSelectedSlot ? (
            <>
              {adjustedSelectedSlot.remainingSlots > 0 ? (
                <div className="border rounded-lg p-4 bg-green-100 mb-4">
                  <p className="font-medium text-green-700">
                    {timeSlot} (Booked: {adjustedSelectedSlot.bookedGuests}{" "}
                    guests, Remaining: {adjustedSelectedSlot.remainingSlots}{" "}
                    slots)
                  </p>
                  <button
                    className="mt-4 bg-[#C8935F] hover:bg-[#b67f51] text-white py-2 px-4 rounded transition"
                    onClick={() => handleSlotSelection(adjustedSelectedSlot)}
                  >
                    Book Now
                  </button>
                </div>
              ) : (
                <div className="border rounded-lg p-4 bg-red-100 mb-4">
                  <p className="text-red-600 font-medium">
                    No seats available for the selected time.
                  </p>
                  {nearestSlotAvailable ? (
                    <div>
                      <p className="text-lg text-gray-800">
                        Nearest available slot:{" "}
                        <span className="font-bold">
                          {nearestSlotAvailable.timeSlot}
                        </span>
                      </p>
                      <p className="text-lg text-gray-800">
                        Remaining slots:{" "}
                        <span className="font-bold">
                          {nearestSlotAvailable.remainingSlots}
                        </span>
                      </p>
                      <button
                        className="mt-4 bg-[#C8935F] hover:bg-[#b67f51] text-white py-2 px-4 rounded transition"
                        onClick={() =>
                          handleSlotSelection(nearestSlotAvailable)
                        }
                      >
                        Book Now
                      </button>
                    </div>
                  ) : (
                    <p className="text-[white]">
                      No slots available for the selected date.
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="text-[white]">Selected time slot not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Wrap in Suspense boundary
export default function AvailableSlotsPageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AvailableSlotsPage />
    </Suspense>
  );
}
