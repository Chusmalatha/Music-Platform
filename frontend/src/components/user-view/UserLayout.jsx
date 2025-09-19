import React from 'react';
import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default UserLayout;
