import Nav from "../layout/Nav";
import Footer from "../layout/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
};
