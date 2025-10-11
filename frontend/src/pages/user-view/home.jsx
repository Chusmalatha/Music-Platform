import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const UserHome = () => {
  const { isAuthenticated } = useSelector((state) => state.auth || {});

  return (
    <div className="relative w-screen min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
        alt="Band performing music live"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 lg:px-24 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-blue-500">Listen</span> to <br /> new music.
        </h1>
        <p className="mb-8 text-gray-300 text-sm sm:text-base lg:text-lg">
          Music connects people through rhythm and melody, inspiring emotions
          and creativity. It enriches lives across all cultures and generations.
        </p>

        {/* Buttons (only if NOT authenticated) */}
        {!isAuthenticated && (
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 120 }}
          >
            <Link
              to="/auth/register"
              className="bg-blue-700 px-6 py-3 rounded text-white font-bold"
            >
              Register
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserHome;
