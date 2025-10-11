import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-screen">
      {/* Left half */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black text-white px-6 py-12">
        <motion.h1 className="text-3xl sm:text-4xl font-extrabold text-center max-w-md"
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, type:'spring', stiffness:150,}}
        >
          Welcome to Music App
        </motion.h1>
      </div>

      {/* Right half */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6 sm:px-8 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
