import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PickPopular from './PickPopular';
import Home from './Home';
import UseMyList from './UseMyList';








function App() {
 

  
  
  return(
    <>
<Router>
  <Switch>
    <Route exact path="/">
   <Home/>
   </Route>
   <Route  path="/pick-popular">
   <PickPopular/>
   </Route>
   <Route  path="/use-my-list">
   <UseMyList/>
   </Route>
   </Switch>
   </Router>
   </>
 
  )
}

export default App;
