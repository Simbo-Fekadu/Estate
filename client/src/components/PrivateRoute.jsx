import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => {
    return state.user;
  });
  const choice = currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
  return choice;
};

export default PrivateRoute;
