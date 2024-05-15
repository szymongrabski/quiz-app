import React from "react";

const TimeSlider = ({ seconds }) => {
  // Obliczamy odwrotną szerokość paska postępu na podstawie przekazanych sekund
  const remainingWidth = `${100 - seconds * 100}%`;

  return (
    <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="h-full bg-green-500"
        style={{ width: remainingWidth, transition: "width 0.3s ease-in-out" }}
      ></div>
    </div>
  );
};

export default TimeSlider;
