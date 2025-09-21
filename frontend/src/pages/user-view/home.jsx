import React from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        alt="Band performing music live"
        className="absolute inset-0 w-full h-full object-cover"  
       
      />


      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b   from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative  z-10 flex flex-col items-center text-center px-6 sm:px-12 lg:px-24 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-blue-500">Listen</span> to <br /> new music.
        </h1>
        <p className="mb-8 text-gray-300 text-sm sm:text-base lg:text-lg">
          Music connects people through rhythm and melody, inspiring emotions
          and creativity. It enriches lives across all cultures and generations.
        </p>

        {/* Buttons */}
      </div>
      <button className="bg-blue-700 text-white">
        <Link to="/auth/login">Login</Link>
      </button>
    </div>
  );
};

export default UserHome;
