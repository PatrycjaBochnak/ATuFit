import React from "react";
import { Layout } from "./Layout";
import Pages from "./Pages";

function App({ sr }) {
  return (
    <div className="App">
      <Layout>
        <Pages sr={sr} />
      </Layout>
    </div>
  );
}
export default App;
