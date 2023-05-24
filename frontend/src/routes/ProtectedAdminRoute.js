import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  return <Navigate to="/" replace />;
  return children;
};

export default ProtectedAdminRoute;
