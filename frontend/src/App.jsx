import React from "react";
import { Layout } from "./layout/Layout";
import Pages from "./pages/Pages";
import "./styles/App.css"

const App = () => {
  return (
    <>
      <Layout>
        <Pages />
      </Layout>
    </>
  );
}
export default App;
