import React, { Suspense } from "react";
import AvailableSlotsPage from "./AvailableSlotsPage";

const AvailableSlotsPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AvailableSlotsPage />
    </Suspense>
  );
};

export default AvailableSlotsPageWrapper;
