import React from "react";
import Home from './Home';
import Form from './Form';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza" component={Form}/>
      </Switch>
    </div>
  );
};
export default App;
