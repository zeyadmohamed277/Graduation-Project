import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    
      <Footer/>
    </>
  );
};

export default Layout;
