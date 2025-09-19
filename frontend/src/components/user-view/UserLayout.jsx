import React from 'react';
import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
    </div>
  );
};

export default UserLayout;
