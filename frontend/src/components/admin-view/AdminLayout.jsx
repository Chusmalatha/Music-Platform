import React from 'react';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main className="pt-16 min-h-screen bg-gray-900 text-white px-6">
        {/* padding top to offset fixed header height */}
        <Outlet /> {/* Render nested routes/pages here */}
      </main>
    </div>
  );
};

export default AdminLayout;
