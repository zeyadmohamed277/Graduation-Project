

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/NavBar.tsx"

const Layout2 = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    
      
    </>
  );
};

export default Layout2;
