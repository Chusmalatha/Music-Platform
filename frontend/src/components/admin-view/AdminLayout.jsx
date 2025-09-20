import React from "react";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <AdminHeader />
      <main className="pt-16 px-4 bg-dark sm:px-6 md:px-8 lg:px-12 w-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
