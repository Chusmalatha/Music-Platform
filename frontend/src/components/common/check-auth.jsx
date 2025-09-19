import { useLocation, Navigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Redirect unauthenticated users away from protected routes
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register")
    )
  ) {
    return <Navigate to="/auth/login" replace />;
  }

  // Redirect authenticated users away from auth pages
  if (
    isAuthenticated &&
    (location.pathname.includes("/auth/login") ||
      location.pathname.includes("/auth/register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/songslist" replace />;
    } else {
      return <Navigate to="/user/songs" replace />; // Example music user home page
    }
  }

  // Prevent music users from accessing admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth" replace />;
  }

  // Prevent admin users from accessing music user routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/user")
  ) {
    return <Navigate to="/admin/songslist" replace />;
  }

  // If no redirects needed, render children
  return <>{children}</>;
}

export default CheckAuth;
