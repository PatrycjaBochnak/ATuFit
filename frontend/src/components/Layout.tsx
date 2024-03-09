import React, { ReactNode } from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
