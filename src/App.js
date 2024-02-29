import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'

import PickPopular from "./PickPopular";
import Home from "./Home";
import UseMyList from "./UseMyList";
import FindMyDinner from "./FindMyDinner";
import NotFound from "./NotFound";
import About from "./About";

function App() {
  return (
    <>

    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/pick-popular">
            <PickPopular />
          </Route>
          <Route path="/use-my-list">
            <UseMyList />
          </Route>
          <Route path="/find-my-dinner">
            <FindMyDinner />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      </Provider>
    </>
  );
}

export default App;
