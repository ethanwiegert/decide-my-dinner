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
    <h4 className="fst-italic">Let Us Decide For You</h4>
    </div>
    
    </div>

<div classname="row">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/pick-popular">Pick Popular</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/use-my-list">Use My List</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>


    
    </div>
        

  
  )
}

export default Header