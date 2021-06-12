import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
