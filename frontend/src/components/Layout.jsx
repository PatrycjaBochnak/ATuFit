import NavMenu from "../layout/Nav";
import Footer from "../layout/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />

      {children}

      <Footer />
    </>
  );
};
