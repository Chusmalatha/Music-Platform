import React, { useState } from "react";
import { Music, Search, Menu, X } from "lucide-react";

const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 sm:px-6 py-3 z-50 shadow-md h-16">
      {/* Left side logo */}
      <div className="flex items-center gap-3">
        <Music className="text-blue-500" />
        <div className="font-bold text-lg sm:text-xl tracking-wide select-none cursor-default">
          MusicApp
        </div>
      </div>

      {/* Search (hidden on small screens) */}
      <div className="hidden md:flex items-center w-80 bg-gray-800 rounded-md px-3 py-1">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to play?"
          aria-label="Search"
          className="bg-transparent flex-grow text-white placeholder-gray-400 outline-none px-2 py-1 text-sm sm:text-base"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Desktop Logout */}
        <button className="hidden sm:block bg-blue-800 text-white font-bold px-3 sm:px-4 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base">
          Logout
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-700 flex flex-col items-start p-4 space-y-4 md:hidden">
          <div className="flex items-center w-full bg-gray-800 rounded-md px-3 py-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search songs..."
              className="bg-transparent flex-grow text-white placeholder-gray-400 outline-none px-2 py-1 text-sm"
            />
          </div>
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

export default AdminHeader;
