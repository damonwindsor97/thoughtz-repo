import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function AuthRoutes() {
  const { getCurrentUser } = useAuth();
  const location = useLocation();

  return (
    !getCurrentUser()
    // If there is no user, redirect back to home
      ? <Navigate to="/" state={{ from: location }} replace/>
      // Give access to what they wanted
      : <Outlet/>
  )
}

export default AuthRoutes