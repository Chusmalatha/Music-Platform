import React from 'react';
import { Music } from 'lucide-react';
import { Link } from 'react-router-dom';
const UserHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-screen bg-black text-white flex items-center justify-between px-6 py-3 z-50 h-16">
      {/* Left side with menu icon and logo */}
      <div className="flex items-center gap-4">
        <button 
          className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          aria-label="Menu"
        >
          <Music />
        </button>
        <div className="font-bold text-xl tracking-wide">MusicApp</div>
      </div>
      {/* Center navigation */}
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 font-semibold text-lg">
        <Link to="/user/home" className="hover:text-gray-300">Home</Link>
        <Link to="/user/songs" className="hover:text-gray-300">Songs</Link>
        <Link to="/user/favourites" className="hover:text-gray-300">Favourites</Link>
        <Link to="/user/contact" className="hover:text-gray-300">Contact</Link>
      </nav>
      {/* Right side for alignment only, can add search/profile here */}
      <div className="w-24">
        <button className="bg-blue-800 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default UserHeader;
