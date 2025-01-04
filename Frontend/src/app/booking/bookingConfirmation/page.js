import React, { Suspense } from "react";
import BookingConfirmationPage from "./BookingConfirmationPage";

const BookingConfirmationPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingConfirmationPage />
    </Suspense>
  );
};

export default BookingConfirmationPageWrapper;
