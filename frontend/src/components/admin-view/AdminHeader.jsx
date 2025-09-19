import React from 'react';
import { Music, Search } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-6 py-3 z-50 shadow-md">
      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          aria-label="Menu"
        >
          <Music />
        </button>
        <div className="font-bold text-xl tracking-wide select-none cursor-default">MusicApp</div>
      </div>

      <div className="hidden md:flex items-center w-80 mx-6 bg-gray-800 rounded-md px-3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to play?"
          aria-label="Search"
          className="bg-transparent flex-grow text-white placeholder-gray-400 outline-none px-2 py-1"
        />
      </div>

      <div className="w-24">
        <button className="bg-blue-800 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
