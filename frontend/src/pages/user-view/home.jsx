import React from "react";

const UserHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full screen background image */}
      <img
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        alt="Band performing music live"
        className="object-cover w-full h-full"
        role="presentation"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Overlaying content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-24 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-blue-500">Listen</span> to <br /> new music.
        </h1>
        <p className="mb-8 max-w-lg text-gray-300 text-base md:text-lg">
          Music connects people through rhythm and melody, inspiring emotions
          and creativity. It enriches lives across all cultures and generations.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex gap-6">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Explore
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
