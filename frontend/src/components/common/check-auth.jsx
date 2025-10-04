import { useLocation, Navigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children, isChecking }) {
  const location = useLocation();

  // Show loading spinner while checking auth
  if (isChecking) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
        Checking authentication...
      </div>
    );
  }

  // Define routes that are allowed without authentication
  const publicPaths = ["/", "/user/home", "/auth/login", "/auth/register"];

  // Redirect unauthenticated users trying to access protected routes
  if (!isAuthenticated && !publicPaths.includes(location.pathname)) {
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
      return <Navigate to="/user/songs" replace />;
    }
  }

  // Prevent normal users from accessing admin pages
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" replace />;
  }

  // Prevent admin from accessing user pages
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/user") &&
    location.pathname !== "/user/home"
  ) {
    return <Navigate to="/admin/songslist" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
