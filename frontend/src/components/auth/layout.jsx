import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left half */}
      <div className="w-1/2 flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-extrabold text-center max-w-md">
          Welcome to Music App
        </h1>
      </div>

      {/* Right half */}
      <div className="w-1/2 flex items-center justify-center bg-white px-8 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
