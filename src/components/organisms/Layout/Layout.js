import { Outlet } from "react-router-dom";
import { useAuth } from "../../../store/AuthContext/useAuth";
import { Spinner } from "../../atoms/Spinner/Spinner";

export const Layout = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return <Outlet />;
};
