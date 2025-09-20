import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/admin-view/AdminLayout';
import AdminSongsList from './components/admin-view/AdminSonglisting';
import AuthLayout from './components/auth/layout';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import CheckAuth from './components/common/check-auth';
import UnauthPage from './pages/unauth';
import NotFound from './pages/not-found/notfound';
import UserLayout from './components/user-view/UserLayout';
import UserHome from './pages/user-view/home';
import UserSongs from './pages/user-view/songs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserFavourites from './pages/user-view/favouites';
import { checkAuth } from './app/authSlice';
import Contact from './pages/user-view/contact';
// Replace with your actual auth state from redux or context
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth || {});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch]);

  
  return (
    <Router>
      <CheckAuth isAuthenticated={isAuthenticated} user={user}>
        <Routes>
          {/* Auth routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="songslist" element={<AdminSongsList />} />
          </Route>

          <Route path="/user/*" element={<UserLayout />}>
            <Route path="home" element={<UserHome />} />
            <Route path="songs" element={<UserSongs />} />
            <Route path="favourites" element={<UserFavourites />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
      
          {/* Unauthorized */}
          <Route path="/unauth-page" element={<UnauthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CheckAuth>
      <ToastContainer />
    </Router>
  );
}

export default App;
