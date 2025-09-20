import React from 'react';
import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 flex flex-col">
      <UserHeader />
      <main className="pt-16 max-w-[100vw] overflow-hidden">
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default UserLayout;
