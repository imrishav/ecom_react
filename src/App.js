import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import "./pages/homepage/homepage.scss";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import Auth from "./pages/auth/auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
