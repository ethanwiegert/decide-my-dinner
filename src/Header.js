import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";
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
    <a class="nav-link " aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/pick-popular">Pick Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="/use-my-list">Use My List</a>
  </li>

</ul>
</div>
    </div>
    </div>
        

  
  )
}

export default Header