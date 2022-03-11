import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";

const Layout = ({ children, location }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      <Navbar location={location} setIsNavbarOpen={setIsNavbarOpen} />
      {children}
      <Footer>I am a footer</Footer>
      <MobileNavbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </>
  );
};

export default Layout;
