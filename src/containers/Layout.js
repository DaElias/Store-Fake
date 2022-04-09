import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
