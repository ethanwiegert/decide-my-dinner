import React from 'react';
import './App.css';
import { Link, useHistory, NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    const history=useHistory()
    return(

    
    <div>
    
    <div className="bg-dark bg-gradient text-white p-4">
    
    <div className="d-flex justify-content-center">
    <h1>Decide Dinner</h1>
    </div>

    <div className="d-flex justify-content-center">
    <h5 className="fst-italic">Let Us Decide For You</h5>
    </div>
    
    </div>

<div className="row">
<nav className="navbar navbar-expand navbar-light bg-light">
  <div className="container-fluid d-flex justify-content-center">
    <a className="navbar-brand" href="/">Home</a>
    </div>

      <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link active" aria-current="page" href="/pick-popular">Pick Popular</a>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link active" href="/use-my-list">Use My List</a>
        </div>
        <div className="container-fluid d-flex justify-content-center">
          <a className="nav-link disabled" href="/find-my-dinner">(Disabled)</a>
        </div>
      
    
 
</nav>
</div>


    
    </div>
        

  
  )
}

export default Header