import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Header } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// <Route path="/products/:id">
//   <SingleProduct />
// </Route>
