import React from "react";
import { Layout } from "./Layout";
import Pages from "./Pages";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Pages/>
      </Layout>
    </div>
  );
}
export default App;
