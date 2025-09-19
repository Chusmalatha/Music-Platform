import React from "react";

const UserHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full screen background image */}
      <img
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        alt="Music band"
        className="object-cover w-full h-full"
      />

      {/* Full screen uniform black overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Overlaying content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 md:p-24 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          <span className="text-blue-500">Listen</span> to <br /> new music.
        </h1>
        <p className="mb-8 max-w-lg text-gray-300 text-lg">
          Music connects people through rhythm and melody, inspiring emotions and creativity. It enriches lives across all cultures and generations.
        </p>
        <div className="flex gap-6">
          
        </div>
      </div>
    </div>
  );
};

export default UserHome;
