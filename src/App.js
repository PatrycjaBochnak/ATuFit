import React from "react";
import "./styles/App.scss";
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
              <div>
                <h1>ERROR 404</h1>
                <h2>Taka strona nie istnieje</h2>{" "}
              </div>
            }
          />
        </Route>
      </Routes>
    );
  }
}

export default App;
