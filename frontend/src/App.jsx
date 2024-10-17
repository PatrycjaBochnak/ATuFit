import React from "react";
import { Layout } from "./layout/Layout";
import Pages from "./pages/Pages";

const App = ({ sr }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Layout>
        <div className="flex-1">
          <Pages sr={sr} />
        </div>
      </Layout>
    </div>
  );
};
export default App;
