import Navbar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

    </>
  );
};

export default AuthLayout;
