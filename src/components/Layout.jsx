import Nav from "../layout/Nav";
import Footer from "../layout/Footer"

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Nav />

      {children}

      <Footer />
    </div>
  );
};
