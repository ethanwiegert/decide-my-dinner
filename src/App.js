import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import PickPopular from './PickPopular';
import Home from './Home';
import UseMyList from './UseMyList';
import FindMyDinner from './FindMyDinner';
import NotFound from './NotFound';








function App() {
 

  
  
  return(
    <>
<Router>
  <Switch>
   <Route  path="/pick-popular">
   <PickPopular/>
   </Route>
   <Route  path="/use-my-list">
   <UseMyList/>
   </Route>
   <Route path="/find-my-dinner">
    <FindMyDinner />
   </Route>
   <Route exact path="/">
   <Home/>
   </Route>
   <Route >
   <NotFound/>
   </Route>
   </Switch>
   </Router>
   </>
 
  )
}

export default App;
