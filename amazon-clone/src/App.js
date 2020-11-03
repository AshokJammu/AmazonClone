import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>HomePage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
