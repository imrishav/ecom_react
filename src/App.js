import React from "react";
import { Route } from "react-router-dom";

import "./pages/homepage/homepage.scss";

import HomePage from "./pages/homepage/homepage";

const HatsPage = () => {
  return (
    <div>
      <h1>H1 Page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
