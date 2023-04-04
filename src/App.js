import React from "react";
import "./styles/_app.scss";
import "./styles/_contact.scss";
import "./styles/_calculatorBMR.scss"
import "./styles/_caloriesCounter.scss"
import "./styles/_homePage.scss"
import "./styles/_navBar.scss"
import CaloriesCounter from "./components/caloriesCounter";
import NavBar from "./components/navBar";
import Contact from "./components/contact";
import HomePage from "./components/homePage";
import Calculator from "./components/calculatorBMR";
import { Routes, Route, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <NavBar>
      <Outlet />
    </NavBar>
  );
};

class App extends React.Component {
  state = {
    product: "",
  };

  setCurrentProduct = (product) => {
    this.setState({ product: product });
  };

  render() {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/caloriesCounter" element={<CaloriesCounter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="error404">
                <h1 className="errorError">ERROR 404</h1>
                <h2 className="errorText">Stay calm! Site is under construction</h2>{" "}
              </div>
            }
          />
        </Route>
      </Routes>
    );
  }
}

export default App;
