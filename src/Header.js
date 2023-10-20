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
      <div>
    
    <div className="row pb-5">
    <div className="d-flex justify-content-center bg-dark text-white p-5">
    <h1>Decide Dinner</h1>
    
    </div>
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <NavLink to="/">Home</NavLink>
  </li>
  <li class="nav-item">
  <NavLink to="/pick-popular">Pick Popular</NavLink>
  </li>
  <li class="nav-item">
  <NavLink to="/use-my-list">Use My List</NavLink>
  </li>

</ul>
</div>
    </div>
    </div>
        

  
  )
}

export default Header