"use client"; // Marks this as a client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import Canteen from "../../../public/image/Canteen.jpg";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
    numberOfGuests: "",
    name: "",
    contact: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, timeSlot, numberOfGuests, name, contact } = formData;

    if (!date || !timeSlot || !numberOfGuests || !name || !contact) {
      console.error("All fields are required!");
      return;
    }

    const queryData = {
      date: date.toString(),
      timeSlot: timeSlot.toString(),
      numberOfGuests: numberOfGuests.toString(),
      name: name.toString(),
      contact: contact.toString(),
    };

    router.push(
      `/booking/availableSlots?date=${encodeURIComponent(
        queryData.date
      )}&timeSlot=${encodeURIComponent(
        queryData.timeSlot
      )}&numberOfGuests=${encodeURIComponent(
        queryData.numberOfGuests
      )}&name=${encodeURIComponent(
        queryData.name
      )}&contact=${encodeURIComponent(queryData.contact)}`
    );
  };

  // Generate time slots from 6:00 AM to 10:00 PM in 30-minute intervals
  const timeSlots = [];
  for (let hour = 6; hour < 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour}:${minute === 0 ? "00" : "30"}`;
      timeSlots.push(time);
    }
  }

  return (
    <div className="booking-page min-h-screen flex items-center justify-center px-4">
      <div
        className="relative max-w-3xl w-full bg-cover bg-center rounded-lg shadow-xl p-6 md:p-10"
        style={{
          backgroundImage: `url(${Canteen.src})`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Booking Page
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-white mb-2">Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border-none rounded-md p-3 text-black bg-[#ffffffcc] focus:ring-2 focus:ring-[#C8935F] placeholder-gray-600"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white mb-2">Time Slot:</label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  className="border-none rounded-md p-3 text-black bg-[#ffffffcc] focus:ring-2 focus:ring-[#C8935F] placeholder-gray-600"
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                      {console.log(typeof time)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-white mb-2">
                  Number of Guests:
                </label>
                <input
                  type="number"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className="border-none rounded-md p-3 text-black bg-[#ffffffcc] focus:ring-2 focus:ring-[#C8935F] placeholder-gray-600"
                  min="1"
                  max="10"
                  required
                />
              </div>

              <div className="flex flex-col">
  <label className="text-sm font-medium text-white mb-2">Name:</label>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={(e) => {
      const value = e.target.value;
      // Allow only letters and spaces
      if (/^[A-Za-z\s]*$/.test(value) || value === "") {
        setFormData({ ...formData, name: value });
      }
    }}
    className="border-none rounded-md p-3 text-black bg-[#ffffffcc] focus:ring-2 focus:ring-[#C8935F] placeholder-gray-600"
    required
  />
</div>

<div className="flex flex-col md:col-span-2">
  <label className="text-sm font-medium text-white mb-2">Contact:</label>
  <input
    type="text"
    name="contact"
    value={formData.contact}
    onChange={(e) => {
      const value = e.target.value;
      // Allow only numbers
      if (/^[0-9]*$/.test(value) || value === "") {
        setFormData({ ...formData, contact: value });
      }
    }}
    className="border-none rounded-md p-3 text-black bg-[#ffffffcc] focus:ring-2 focus:ring-[#C8935F] placeholder-gray-600"
    required
  />
</div>

            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#C8935F] hover:bg-[#b67f51] text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
