import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InternalNavbar from "./InternalNavbar";

const Layout = ({ children, location, internal }) => {
  return (
    <>
      {internal ? <InternalNavbar /> : <Navbar location={location} />}
      {children}
      <Footer>I am a footer</Footer>
    </>
  );
};

export default Layout;
