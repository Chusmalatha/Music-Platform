import React, { useState } from "react";
import { Music, Search, Menu, X, LogOut} from "lucide-react";
import { logoutUser } from "../../app/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion"



const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut(){
        dispatch(logoutUser());
        
    }
  


  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 sm:px-6 py-3 z-50 shadow-md h-16">
      {/* Left side logo */}
      <div className="flex items-center gap-3">
        <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0.75,1,0.75]}}
                  transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
                >
                <Music className="text-blue-500 w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
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
  <motion.button 
  initial={{x:20}}
    animate={{x:0}}
    transition={{duration:0.5, delay:0.5, type:'spring', stiffness:'120'}}
    
    className="hidden sm:flex items-center gap-2 bg-blue-700 text-white font-bold px-3 sm:px-4 py-2 rounded hover:bg-blue-600 transition text-sm sm:text-base"
    onClick={() => {
          handleLogOut();
      }}
  >
    <LogOut className="h-4 w-4" aria-hidden="true" />
    Logout
  </motion.button>


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
              onClick={handleLogOut}
              className="w-full bg-blue-700 text-white font-bold px-4 py-2 rounded hover:bg-blue-600 transition"
              >
              <LogOut className="h-4 w-4 text-gray-600" aria-hidden="true" />
                  Logout
            </button>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;
