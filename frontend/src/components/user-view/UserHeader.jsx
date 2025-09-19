import React, { useState } from "react";
import { Music, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen bg-black text-white flex items-center justify-between px-4 sm:px-6 py-3 z-50 h-16">
      {/* Left side with logo */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Music className="text-blue-500" />
        <div className="font-bold text-lg sm:text-xl tracking-wide">MusicApp</div>
      </div>

      {/* Center navigation (hidden on mobile) */}
      <nav className="hidden md:flex gap-6 lg:gap-8 font-semibold text-base lg:text-lg">
        <Link to="/user/home" className="hover:text-gray-300">Home</Link>
        <Link to="/user/songs" className="hover:text-gray-300">Songs</Link>
        <Link to="/user/favourites" className="hover:text-gray-300">Favourites</Link>
        <Link to="/user/contact" className="hover:text-gray-300">Contact</Link>
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Desktop Logout */}
        <button className="hidden sm:block bg-blue-800 text-white font-bold px-3 sm:px-4 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base">
          Logout
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-gray-900 shadow-lg rounded-bl-lg flex flex-col items-start p-4 space-y-4 md:hidden">
          <Link
            to="/user/home"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/user/songs"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Songs
          </Link>
          <Link
            to="/user/favourites"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Favourites
          </Link>
          <Link
            to="/user/contact"
            className="hover:text-blue-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            className="w-full bg-blue-800 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
