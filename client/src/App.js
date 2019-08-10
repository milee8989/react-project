import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./component/Homepage";

function App() {
  return ( <Router>
    <Switch>

    </Switch>

    <Route exact path="/" component={Homepage} />

  </Router>    
  );
}

export default App;
