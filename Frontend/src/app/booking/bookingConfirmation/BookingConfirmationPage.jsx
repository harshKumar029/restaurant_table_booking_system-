"use client"; // Marks this as a client component

import { useSearchParams } from "next/navigation";

const BookingConfirmationPage = () => {
  const searchParams = useSearchParams();

  // Extract query parameters
  const date = searchParams.get("date");
  const timeSlot = searchParams.get("timeSlot");
  const numberOfGuests = searchParams.get("numberOfGuests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");
  console.log(date, timeSlot, name);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Booking Confirmation</h1>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-800">
            <span className="font-semibold text-gray-700">Thank you, </span>
            {name}! Your booking has been confirmed.
          </p>

          <div className="space-y-3">
            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Date:</span>
              <span>{date}</span>
            </div>

            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Time Slot:</span>
              <span>{timeSlot}</span>
            </div>

            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Number of Guests:</span>
              <span>{numberOfGuests}</span>
            </div>

            <div className="flex justify-between text-gray-800">
              <span className="font-medium">Contact:</span>
              <span>{contact}</span>
            </div>
          </div>

          <p className="text-lg text-gray-800 mt-4">
            <span className="font-semibold text-gray-700">We look forward to seeing you!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationPage;