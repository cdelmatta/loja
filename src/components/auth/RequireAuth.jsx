import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router";

export default function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}