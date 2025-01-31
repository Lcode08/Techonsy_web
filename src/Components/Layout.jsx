// components/Layout.js
'use client'
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;