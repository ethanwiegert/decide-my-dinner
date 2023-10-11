import React from 'react';
import './App.css';
import { Link, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar(){
    const history=useHistory()
    return(
        
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/pick-popular">Pick Popular</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/use-my-list">Use My List</a>
  </li>

</ul>
  
  )
}

export default NavigationBar