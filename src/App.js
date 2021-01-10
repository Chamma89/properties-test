import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Header, SingleProperty } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/property/:id">
          <SingleProperty />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
