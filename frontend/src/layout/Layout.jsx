import NavMenu from "./NavMenu";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <NavMenu />

      {children}

      <Footer />
    </>
  );
};
